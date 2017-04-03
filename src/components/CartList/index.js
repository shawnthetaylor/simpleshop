import React, { Component, PropTypes } from 'react';
import CartItem from '../CartItem';
import styles from './CartList.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onCartDelete: PropTypes.func.isRequired
};

class CartList extends Component {
  constructor(props, context) {
    super(props, context);

    this.generateCartList = this.generateCartList.bind(this);
  }

  generateCartList() {
    return this.props.cart.map((item, i) => {
      return (
        <CartItem { ...item }
                  key={ i }
                  onCartDelete={ () => this.props.onCartDelete(item) } />
      )
    });
  }

  render() {
    return (
      <ul className={ cx('list') }>
        { this.generateCartList() }
      </ul>
    );
  }
}

CartList.propTypes = propTypes;

export default CartList;
