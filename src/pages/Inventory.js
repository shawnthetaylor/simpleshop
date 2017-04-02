import React, { Component } from 'react';
import InventoryListContainer from '../containers/InventoryListContainer';

class Inventory extends Component {
  render() {
    return (
      <section className='container'>
        <InventoryListContainer />
      </section>
    );
  }
};

export default Inventory;
