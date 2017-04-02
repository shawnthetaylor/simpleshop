import Actions from '../constants/actions';

const updateInventory = (name, dq) => {
  return {
    type: Actions.UPDATE_INVENTORY,
    name,
    dq
  };
}

export default updateInventory;
