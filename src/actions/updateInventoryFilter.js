import Actions from '../constants/actions';

const updateInventoryFilter = filter => {
  return {
    type: Actions.UPDATE_FILTER,
    filter
  };
}

export default updateInventoryFilter;
