import Actions from '../constants/actions';

const addInventory = ({ name, price, quantity }) => {
  return {
    type: Actions.ADD_INVENTORY,
    name,
    price,
    quantity
  };
}

export default addInventory;
