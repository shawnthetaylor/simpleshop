import Actions from '../constants/actions';

const createInventory = ({ name, price, quantity }) => {
  return {
    type: Actions.CREATE_INVENTORY,
    name,
    price,
    quantity
  };
}

export default createInventory;
