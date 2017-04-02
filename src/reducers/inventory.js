import Actions from '../constants/actions';
import initialState from '../constants/initialState';

const inventory = (state = initialState.inventory, action) => {
  switch(action.type) {
    case Actions.ADD_INVENTORY: {
      const { name, price, quantity } = action;
      return [
        ...state,
        { name, price, quantity }
      ];
    }

    default:
      return state
  }
}

export default inventory;
