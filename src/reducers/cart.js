import Actions from '../constants/actions';
import initialState from '../constants/initialState';

const cart = (state = initialState.cart, action) => {
  switch(action.type) {
    case Actions.UPDATE_CART: {
      const { name, quantity, price } = action;
      // if item already in cart, simply update its quantity...
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

    case Actions.DELETE_CART: {
      return state.filter(i => i.name !== action.name);
    }

    default:
      return state;
  }
}

export default cart;
