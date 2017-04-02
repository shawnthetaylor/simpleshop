import Actions from '../constants/actions';

const addCart = ({ name, price }, dq) => {
  return {
    type: Actions.UPDATE_CART,
    name,
    quantity: dq,
    price,
  };
}

export default addCart;
