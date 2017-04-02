import React, { Component } from 'react';
import CartListContainer from '../containers/CartListContainer';

class Cart extends Component {
  render() {
    return (
      <section className='container'>
        <CartListContainer />
      </section>
    );
  }
};

export default Cart;
