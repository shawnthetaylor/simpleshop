import React, { Component, PropTypes } from 'react';
import InventoryItem from '../InventoryItem';

const propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onInventoryClick: PropTypes.func.isRequired
};

class InventoryList extends Component {
  constructor(props, context) {
    super(props, context);

    this.generateInventoryList = this.generateInventoryList.bind(this);
  }

  generateInventoryList() {
    return this.props.inventory.map((item, i) => {
      return (
        <InventoryItem { ...item }
                       key={ i }
                       onInventoryClick={ dq => this.props.onInventoryClick(item, dq) } />
      );
    });
  }

  render() {
    // TODO: needs styling on <ul>
    return (
      <ul>
        { this.generateInventoryList() }
      </ul>
    );
  }
}

InventoryList.propTypes = propTypes;

export default InventoryList;
