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

    case Actions.UPDATE_INVENTORY: {
      const { name, dq } = action;
      return state.map((item, i) => {
        if (item.name === name) {
          return Object.assign({}, item, {
            quantity: item.quantity - dq
          });
        }
      });
    }

    default:
      return state;
  }
}

export default inventory;
