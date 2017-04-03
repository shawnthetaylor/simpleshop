import Actions from '../constants/actions';
import initialState from '../constants/initialState';

const inventory = (state = initialState.inventory, action) => {
  switch(action.type) {
    case Actions.HYDRATE_INVENTORY:
      return action.inventory;

    case Actions.CREATE_INVENTORY: {
      const { name, price, quantity } = action;
      if (state.some(i => i.name === name)) {
        return state;
      }
      
      return [
        ...state,
        { name, price, quantity }
      ];
    }

    case Actions.ADD_INVENTORY: {
      const { name, dq } = action;
      return state.map((item, i) => {
        if (item.name === name) {
          return Object.assign({}, item, {
            quantity: item.quantity + dq
          });
        }
        return item;
      });
    }

    case Actions.DELETE_INVENTORY: {
      const { name, dq } = action;
      return state.map((item, i) => {
        if (item.name === name) {
          return Object.assign({}, item, {
            quantity: item.quantity - dq
          });
        }
        return item;
      });
    }

    default:
      return state;
  }
}

export default inventory;
