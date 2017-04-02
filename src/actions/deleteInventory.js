import Actions from '../constants/actions';

const deleteInventory = (name, dq) => {
  return {
    type: Actions.DELETE_INVENTORY,
    name,
    dq
  };
}

export default deleteInventory;
