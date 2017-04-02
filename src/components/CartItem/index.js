import React, { Component, PropTypes } from 'react';

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
      <li>
        <h2>{ this.props.name }</h2>
        <p>{ this.props.quantity }</p>
        <button onClick={ this.deleteItem }>X</button>
      </li>
    );
  }
}

CartItem.propTypes = propTypes;

export default CartItem;
