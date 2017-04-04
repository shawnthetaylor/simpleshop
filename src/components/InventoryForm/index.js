import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';

import styles from './InventoryForm.css';

const cx = classNames.bind(styles);

const propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onCreateItem: PropTypes.func.isRequired,
  onUpdateItem: PropTypes.func.isRequired
};

class InventoryForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      current: 0,
      errorMessage: '',
      isUpdate: false
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.getConfirmMessage = this.getConfirmMessage.bind(this);
  }

  componentDidMount() {
    this.name.focus(); // TODO: does this work?
    this.inputs = [this.name, this.price, this.quantity];
  }

  onFormSubmit(e) {
    e.preventDefault();

    const { current } = this.state;
    const target = this.inputs[current];

    if (target.value === '') {
      this.setState({ errorMessage: 'Please provide a value for this field.'});
      return;
    }

    // Duplicate detection
    if (current === 1) {
      const duplicate = this.props.inventory.find(i => {
        return i.name === this.name.value;
      });
      if (duplicate) {
        if (duplicate.price === parseFloat(this.price.value)) {
          // If same name and price, update quantity
          this.setState({ isUpdate: true });
        } else {
          // If same name but different price, do not allow duplicate
          const message = (
            <span>
              { `Another item named ${this.name.value} exists. Either enter
                 the same price to update its quantity or `}
              <a href='#' onClick={ this.resetForm }>Start Over</a>.
            </span>
          );
          this.setState({ errorMessage: message });
          return;
        }
      }
    }

    // Allow progress bar animation to reach full width
    if (current === 2) {
      this.setState({ current: current + 1 });
      // Bar width transition time is 200
      setTimeout(() => {
        this.setState({ current: -1 })
      }, 700);
      return;
    }

    // Clear error message before moving to next step
    this.setState({ errorMessage: '' });
    this.setState({ current: current + 1 });
  }

  onConfirm() {
    const item = {
      name: this.name.value,
      price: parseFloat(this.price.value),
      quantity: parseInt(this.quantity.value, 10)
    };

    if (this.state.isUpdate) {
      this.props.onUpdateItem(item.name, item.quantity);
    } else {
      this.props.onCreateItem(item);
    }

    this.resetForm();
  }

  getConfirmMessage() {
    let message = 'Creating a new item.';
    if (this.state.isUpdate) {
      message = 'Updating quantity of an existing product.';
    }
    return `${message} Does this look right?`;
  }

  resetForm() {
    this.setState({ current: 0, isUpdate: false, errorMessage: '' });
    this.name.value = '';
    this.price.value = '';
    this.quantity.value = ''
  }

  render() {
    let progress = {
      width: `${(this.state.current / 3) * 100}%`
    };

    return (
      <form className={ cx('form') } onSubmit={ this.onFormSubmit }>
        <ul>
          <li className={ cx('form-item', { 'current': this.state.current === 0 }) }>
            <label className={ cx('form-label') } htmlFor='name'>
              What is the name of the item?
            </label>
            <input type='text'
                   id='name'
                   className={ cx('form-input') }
                   name='name'
                   ref={ node => { this.name = node; }} />
          </li>
          <li className={ cx('form-item', { 'current': this.state.current === 1 }) }>
            <label className={ cx('form-label') } htmlFor='price'>
              What is the price per unit of this item?
            </label>
            <input type='number'
                   className={ cx('form-input') }
                   name='price'
                   id='price'
                   min='0.01'
                   step='0.01'
                   name='price'
                   ref={ node => { this.price = node; }} />
          </li>
          <li className={ cx('form-item', { 'current': this.state.current >= 2 }) }>
            <label className={ cx('form-label') } htmlFor='quantity'>
              How many units would you like to add?
            </label>
            <input type='number'
                   className={ cx('form-input') }
                   id='quantity'
                   min='1'
                   name='quantity'
                   ref={ node => { this.quantity = node; }} />
          </li>
          <li className={ cx('form-confirm', {
                'current': this.state.current === -1
              }) }>
            <h2 className={ cx('form-confirm-message') }>
              { this.getConfirmMessage() }
            </h2>
            <div className={ cx('form-confirm-data') }>
              { this.state.isUpdate ?
                <p>
                  <strong>Additional Stock </strong>
                  { this.quantity ? this.quantity.value : '' }
                </p> :
                <div>
                  <p>
                    <strong>Name </strong>{ this.name ? this.name.value : '' }</p>
                  <p>
                    <strong>Price </strong>
                    ${ this.price ? this.price.value : '' }
                  </p>
                  <p>
                    <strong>Quantity </strong>
                    { this.quantity ? this.quantity.value : '' }
                  </p>
                </div>
              }
              <div className={ cx('form-confirm-btns') }>
                <button className='btn btn-primary'
                        type='button'
                        onClick={ this.onConfirm }>
                  Looks Good
                </button>
                <button className='btn btn-secondary'
                        type='button'
                        onClick={ this.resetForm }>
                  Cancel
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div className={ cx('controls', { 'hide': this.state.current === -1 }) }>
          <div className={ cx('progress') }
               style={ progress }></div>
          <div className={ cx('messaging') }>
            <p className={ cx('message', { 'error': this.state.errorMessage }) }>
              { this.state.errorMessage }
            </p>
            <p className={ cx('step') }>{ `${ this.state.current } / 3` }</p>
          </div>
        </div>
        <input className={ cx('form-submit') } type='submit' value='Submit' />
      </form>
    );
  }
};

InventoryForm.propTypes = propTypes

export default InventoryForm;
