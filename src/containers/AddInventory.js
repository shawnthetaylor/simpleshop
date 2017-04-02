import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import createInventory from '../actions/createInventory';

const propTypes = {
  dispatch: PropTypes.func.isRequired
};

class AddInventory extends Component {
  constructor(props, context) {
    super(props, context);

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();

    const item = {
      name: this.name.value,
      price: parseFloat(this.price.value),
      quantity: parseInt(this.quantity.value, 10)
    };
    this.props.dispatch(createInventory(item));

    // Reset form values
    this.name.value = '';
    this.price.value = '';
    this.quantity.value = '';
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <label>
          What is the name of the product?
          <input type='text'
                 name='name'
                 ref={ node => { this.name = node; }}
                 required />
        </label>
        <label>
          What is the price per unit of this product?
          <input type='number'
                 name='price'
                 min='0.01'
                 step='0.01'
                 name='price'
                 ref={ node => { this.price = node; }}
                 required />
        </label>
        <label>
          How many units would you like to add?
          <input type='number'
                 min='0'
                 name='quantity'
                 ref={ node => { this.quantity = node; }}
                 required />
        </label>
        <input type='submit' value='Submit' />
      </form>
    );
  }
}

AddInventory.propTypes = propTypes
AddInventory = connect()(AddInventory);

export default AddInventory;
