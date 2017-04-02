import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import initialState from './constants/initialState';
import Root from './components/Root';
import simpleShopApp from './reducers';

const store = createStore(
  simpleShopApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Root store={ store } />,
  document.getElementById('root')
);
