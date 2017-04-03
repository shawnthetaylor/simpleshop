import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './CartItem.css';

const cx = classNames.bind(styles);

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  onCartDelete: PropTypes.func.isRequired
};

class CartItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem() {
    // TODO: ask for confirmation
    const { name, price, quantity } = this.props;
    this.props.onCartDelete({ name, price, quantity });
  }

  render() {
    return (
      <li className={ cx('item') }>
        <div className={ cx('properties') }>
          <h2>{ this.props.name }</h2>
          <p className={ cx('selected') }>
            <i className='fa fa-times'></i>
            <span className={ cx('quantity') }>
              { this.props.quantity }
            </span>
          </p>
        </div>
        <button className={ cx('btn') } onClick={ this.deleteItem }>
          <i className='fa fa-times-circle'></i>
        </button>
      </li>
    );
  }
}

CartItem.propTypes = propTypes;

export default CartItem;
