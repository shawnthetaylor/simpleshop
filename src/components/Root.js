import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from '../pages/App';
import Warehouse from '../pages/Warehouse';
import Inventory from '../pages/Inventory';
import Cart from '../pages/Cart';

const propTypes = {
  store: PropTypes.object.isRequired
};

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Warehouse } />
        <Route path='inventory' component={ Inventory } />
        <Route path='cart' component={ Cart } />
      </Route>
    </Router>
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
