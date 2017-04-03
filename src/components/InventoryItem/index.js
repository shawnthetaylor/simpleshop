import React, { Component, PropTypes } from 'react';
import styles from './InventoryItem.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onInventoryClick: PropTypes.func.isRequired
};

class InventoryItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { selected: 0 };
    this.incrementSelected = this.incrementSelected.bind(this);
    this.decrementSelected = this.decrementSelected.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  incrementSelected() {
    this.setState({ selected: this.state.selected + 1 });
  }

  decrementSelected() {
    this.setState({ selected: this.state.selected - 1 });
  }

  addToCart() {
    this.props.onInventoryClick(this.state.selected);
    this.setState({ selected: 0 });
  }

  render() {
    const disableIncrement = !this.props.quantity || this.state.selected === this.props.quantity;
    return (
      <li className={ cx('item') }>
        <div className={ cx('header') }>
          <h2 className={ cx('header-item') }>{ this.props.name }</h2>
          <p className={ cx('stock', { 'empty': !this.props.quantity } )}>
            { this.props.quantity }
          </p>
        </div>
        <div className={ cx('price') }>
          { `$${ this.props.price }` }
          <span className={ cx('unit') }>/ unit</span>
        </div>
        { this.props.quantity ?
          <div className={ cx('cart') }>
            <div className={ cx('cart-controls') }>
              <button className={ cx('btn btn-small btn-secondary') }
                      disabled={ this.state.selected === 0 }
                      onClick={ this.decrementSelected }>
                <i className='fa fa-minus'></i>
              </button>
              <p className={ cx('selected') }>{ this.state.selected }</p>
              <button className={ cx('btn btn-small btn-secondary') }
                      disabled={ disableIncrement }
                      onClick={ this.incrementSelected }>
                <i className='fa fa-plus'></i>
              </button>
            </div>
            <button className={ cx('btn btn-secondary') }
                    disabled={ !this.state.selected }
                    onClick={ this.addToCart }>Add to Cart</button>
          </div>
        : <div className={ cx('out') }>Out of Stock</div> }
      </li>
    );
  }
}

InventoryItem.propTypes = propTypes;

export default InventoryItem;
