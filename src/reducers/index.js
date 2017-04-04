import { combineReducers } from 'redux';

import cart from './cart';
import filter from './filter';
import inventory from './inventory';

const simpleShopApp = combineReducers({
  cart,
  filter,
  inventory
});

export default simpleShopApp;
