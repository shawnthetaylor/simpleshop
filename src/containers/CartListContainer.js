import { connect } from 'react-redux';
import CartList from '../components/CartList';
import addInventory from '../actions/addInventory';
import deleteCartItem from '../actions/deleteCartItem';
import emptyCart from '../actions/emptyCart';
import bulkAddInventory from '../actions/bulkAddInventory';

const mapStateToProps = state => {
  return { cart: state.cart };
};

const mapDispatchToProps = dispatch => {
  return {
    onCartDelete: cartItem => {
      dispatch(addInventory(cartItem.name, cartItem.quantity));
      dispatch(deleteCartItem(cartItem));
    },
    checkout: () => {
      dispatch(emptyCart());
    },
    resetCart: cart => {
      dispatch(bulkAddInventory(cart)),
      dispatch(emptyCart());
    }
  };
};

const CartListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);

export default CartListContainer;
