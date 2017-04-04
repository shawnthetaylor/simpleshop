import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createSession } from 'redux-session';

import Actions from './constants/actions';
import initialState from './constants/initialState';
import Root from './components/Root';
import simpleShopApp from './reducers';

const session = createSession({
  ns: 'simpleshop',
  selectState(state) {
    // no need to store filter settings in session
    return {
      cart: state.cart,
      inventory: state.inventory
    };
  },
  throttle: 1000, // update session every 1 second
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
  applyMiddleware(session)
);

render(
  <Root store={ store } />,
  document.getElementById('root')
);
