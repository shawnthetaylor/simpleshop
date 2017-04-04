import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';

import CartItem from '../CartItem';
import styles from './CartList.css';

const cx = classNames.bind(styles);

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onCartDelete: PropTypes.func.isRequired,
  resetCart: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired
};

class CartList extends Component {
  constructor(props, context) {
    super(props, context);

    this.generateCartList = this.generateCartList.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.resetCart = this.resetCart.bind(this);
  }

  generateCartList() {
    return this.props.cart.map((item, i) => {
      return (
        <CartItem { ...item }
                  key={ i }
                  onCartDelete={ () => this.props.onCartDelete(item) } />
      );
    });
  }

  getTotal() {
    let total = 0;
    for (const item of this.props.cart) {
      total += item.quantity * item.price;
    }
    return total.toFixed(2);
  }

  resetCart() {
    this.props.resetCart(this.props.cart);
  }

  render() {
    return (
      <div>
        { this.props.cart.length ?
          <div>
            <ul className={ cx('list') }>
              { this.generateCartList() }
            </ul>
            <div className={ cx('total') }>
              <h2>Total - </h2>
              <p>{ `$${ this.getTotal() }` }</p>
            </div>
            <div className={ cx('buttons') }>
              <button className='btn btn-primary'
                      onClick={ this.props.checkout }>
                Checkout
              </button>
              <button className='btn btn-secondary'
                      onClick={ this.resetCart }>
                Clear Cart
              </button>
            </div>
          </div> :
          <h1 className='empty-page'>No items in cart!</h1>
        }
      </div>
    );
  }
};

CartList.propTypes = propTypes;

export default CartList;
