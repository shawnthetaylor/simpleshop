import Actions from '../constants/actions';

const deleteCart = ({ name }) => {
  return {
    type: Actions.DELETE_CART,
    name
  };
}

export default deleteCart;
