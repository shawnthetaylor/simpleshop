import { connect } from 'react-redux';

import deleteInventory from '../actions/deleteInventory';
import updateCart from '../actions/updateCart';
import InventoryList from '../components/InventoryList';
import Filters from '../constants/filters';

const getVisibleInventory = (inventory, filter) => {
  switch(filter) {
    case Filters.SHOW_ALL:
      return inventory;

    case Filters.SHOW_AVAILABLE:
      return inventory.filter(i => i.quantity !== 0);

    case Filters.SHOW_ALPHA_STOCK: {
      // Sorts A-Z
      // Use concat() to create a new instances (sort is in-place)
      return inventory.concat().sort((i1, i2) => {
        const i1Name = i1.name.toLowerCase();
        const i2Name = i2.name.toLowerCase();

        return i1Name < i2Name ? -1 : i1Name > i2Name ? 1 : 0;
      });
    }

    case Filters.SHOW_MOST_STOCK:
      return inventory.concat().sort((i1, i2) => i2.quantity - i1.quantity);

    case Filters.SHOW_PRICE_STOCK: {
      return inventory.concat().sort((i1, i2) => {
        const i1Price = i1.price;
        const i2Price = i2.price;

        return i1Price < i2Price ? -1 : i1Price > i2Price ? 1 : 0;
      });
    }

    default:
      return inventory;
  };
};


const mapStateToProps = state => {
  return {
    inventory: getVisibleInventory(state.inventory, state.filter)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInventoryClick: (item, dq)=> {
      dispatch(deleteInventory(item.name, dq));
      dispatch(updateCart(item, dq));
    }
  };
};

const InventoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryList);

export default InventoryListContainer;
