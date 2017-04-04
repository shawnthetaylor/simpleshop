import Actions from '../constants/actions';
import initialState from '../constants/initialState';

const inventory = (state = initialState.inventory, action) => {
  switch(action.type) {
    case Actions.HYDRATE_INVENTORY:
      // Update state with session data
      return action.inventory;

    case Actions.CREATE_INVENTORY: {
      const { name, price, quantity } = action;
      /*if (state.some(i => i.name === name)) {
        return state;
      }*/

      return [
        ...state,
        { name, price, quantity }
      ];
    }

    case Actions.BULK_ADD_INVENTORY: {
      // Add multiple items to inventory (when cart reset)
      const { cart } = action;
      return state.map(item => {
        const cartItem = cart.find(i => i.name === item.name);
        if (cartItem) {
          return Object.assign({}, item, {
            quantity: item.quantity + cartItem.quantity
          });
        }
        return item;
      });
    }

    case Actions.ADD_INVENTORY: {
      // Increase quantity of an existing inventory item
      const { name, dq } = action;
      return state.map(item => {
        if (item.name === name) {
          return Object.assign({}, item, {
            quantity: item.quantity + dq
          });
        }
        return item;
      });
    }

    case Actions.DELETE_INVENTORY: {
      // Decrease quantity of an existing inventory item
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
  };
};

export default inventory;
