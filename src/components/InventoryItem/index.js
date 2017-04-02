import React, { Component, PropTypes } from 'react';

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
    // TODO: clean up
    return (
      <li>
        <h2>{ this.props.name }</h2>
        <p>{ this.props.price }</p>
        <p>{ this.props.quantity }</p>
        <div>
          { this.state.selected > 0 ? <button onClick={ this.decrementSelected }>-</button> : null }
          <p>{ this.state.selected }</p>
          { this.state.selected <= this.props.quantity && this.props.quantity ? <button onClick={ this.incrementSelected }>+</button> : null }
        </div>
        <button onClick={ this.addToCart }>Add to Cart</button>
      </li>
    );
  }
}

InventoryItem.propTypes = propTypes;

export default InventoryItem;
