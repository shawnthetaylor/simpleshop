import Actions from '../constants/actions';
import initialState from '../constants/initialState';

const cart = (state = initialState.cart, action) => {
  switch(action.type) {
    case Actions.HYDRATE_CART:
      // Update store with session data
      return action.cart;

    case Actions.EMPTY_CART:
      return [];

    case Actions.UPDATE_CART: {
      const { name, quantity, price } = action;
      // If item already in cart, update its quantity...
      if (state.some(i => i.name === name)) {
        return state.map(item => {
          if (item.name === name) {
            return Object.assign({}, item, {
              quantity: item.quantity + quantity
            });
          }
          return item;
        });
      }

      // ...otherwise add a new entry
      return [
        ...state,
        { name, quantity, price }
      ];
    }

    case Actions.DELETE_CART_ITEM: {
      return state.filter(i => i.name !== action.name);
    }

    default:
      return state;
  };
};

export default cart;
