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
        });
      }

      // ...otherwise add a new entry
      return [
        ...state,
        { name, quantity, price }
      ];
    }

    default:
      return state;
  }
}

export default cart;
