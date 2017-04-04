import Actions from '../constants/actions';

const addInventory = (name, dq) => {
  return {
    type: Actions.ADD_INVENTORY,
    name,
    dq
  };
};

export default addInventory;
