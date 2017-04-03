import React, { Component, PropTypes } from 'react';
import styles from './InventoryForm.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const propTypes = {
  onFormSubmit: PropTypes.func.isRequired
};

class InventoryForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      current: 0,
      errorMessage: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  componentDidMount() {
    this.name.focus(); // TODO: does this work?
    this.inputs = [this.name, this.price, this.quantity];
  }

  onFormSubmit(e) {
    e.preventDefault();
    const target = this.inputs[this.state.current];

    if (target.value === '') {
      this.setState({ errorMessage: 'Please provide a value for this field.'});
      return;
    }

    // let progress bar animation finish
    if (this.state.current === 2) {
      this.setState({ current: this.state.current + 1 });
      setTimeout(() => {
        this.setState({ current: -1 })
      }, 700);
      return;
    }

    this.setState({ errorMessage: '' });
    this.setState({ current: this.state.current + 1 });
  }

  onConfirm() {
    const item = {
      name: this.name.value,
      price: parseFloat(this.price.value),
      quantity: parseInt(this.quantity.value, 10)
    };

    this.props.onFormSubmit(item);

    this.resetForm();
  }

  resetForm() {
    this.setState({ current: 0 });
    this.name.value = '';
    this.price.value = '';
    this.quantity.value = ''
  }
  render() {
    let progress = {
      width: `${(this.state.current / 3) * 100}%`
    };

    return (
      <form onSubmit={ this.onFormSubmit }>
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
          <li className={ cx('form-confirm', { 'current': this.state.current === -1 }) }>
            <h2>Does this look right?</h2>
            <div className={ cx('form-confirm-data') }>
              <p><strong>Name </strong>{ this.name ? this.name.value : '' }</p>
              <p><strong>Price </strong>{ this.price ? this.price.value : '' }</p>
              <p><strong>Quantity </strong>{ this.quantity ? this.quantity.value : '' }</p>
              <div className={ cx('form-confirm-btns') }>
                <button className='btn btn-primary' type='button' onClick={ this.onConfirm }>
                  Looks Good
                </button>
                <button className='btn btn-secondary' type='button' onClick={ this.resetForm }>
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
            <p>{ `${ this.state.current } / 3` }</p>
          </div>
        </div>
        <input className={ cx('form-submit') } type='submit' value='Submit' />
      </form>
    );
  }
}

InventoryForm.propTypes = propTypes

export default InventoryForm;
