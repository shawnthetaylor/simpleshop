import { combineReducers } from 'redux';
import inventory from './inventory';
import cart from './cart';

const simpleShopApp = combineReducers({
  inventory,
  cart
});

export default simpleShopApp;
