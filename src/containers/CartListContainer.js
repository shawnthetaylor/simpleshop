import { connect } from 'react-redux';
import CartList from '../components/CartList';
import addInventory from '../actions/addInventory';
import deleteCart from '../actions/deleteCart';

const mapStateToProps = state => {
  return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
  return {
    onCartDelete: cartItem => {
      dispatch(addInventory(cartItem.name, cartItem.quantity));
      dispatch(deleteCart(cartItem));
    }
  };
};

const CartListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);

export default CartListContainer;
