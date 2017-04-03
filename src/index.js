import React from 'react';
import Actions from './constants/actions';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createSession } from 'redux-session';
import initialState from './constants/initialState';
import Root from './components/Root';
import simpleShopApp from './reducers';

const session = createSession({
  ns: 'simpleshop',
  selectState(state) {
    return {
      cart: state.cart,
      inventory: state.inventory
    };
  },
  throttle: 1000,
  onLoad(storedState, dispatch) {
    dispatch({
      type: Actions.HYDRATE_CART,
      cart: storedState.cart
    });
    dispatch({
      type: Actions.HYDRATE_INVENTORY,
      inventory: storedState.inventory
    });
  }
});

const store = createStore(
  simpleShopApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(session)
);

render(
  <Root store={ store } />,
  document.getElementById('root')
);
