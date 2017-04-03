import { combineReducers } from 'redux';
import inventory from './inventory';
import cart from './cart';
import filter from './filter';

const simpleShopApp = combineReducers({
  inventory,
  cart,
  filter
});

export default simpleShopApp;
