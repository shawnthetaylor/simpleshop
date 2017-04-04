import Actions from '../constants/actions';

const bulkAddInventory = cart => {
  return {
    type: Actions.BULK_ADD_INVENTORY,
    cart
  };
};

export default bulkAddInventory;
