import Actions from '../constants/actions';

const deleteCartItem = ({ name }) => {
  return {
    type: Actions.DELETE_CART_ITEM,
    name
  };
}

export default deleteCartItem;
