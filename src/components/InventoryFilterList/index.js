import React, { Component } from 'react';
import classNames from 'classnames/bind';

import InventoryFilterContainer from '../../containers/InventoryFilterContainer';
import styles from './InventoryFilterList.css';

const cx = classNames.bind(styles);

class InventoryFilterList extends Component {
  render() {
    return (
      <section>
        <h2 className={ cx('filter-header') }>Filters</h2>
        <ul className={ cx('list') }>
          <li className={ cx('filter-item-header') }>
            <h2 className={ cx('filters') }>Filters:</h2>
          </li>
          <li>
            <InventoryFilterContainer filter='SHOW_AVAILABLE'>
              In Stock
            </InventoryFilterContainer>
          </li>
          <li>
            <InventoryFilterContainer filter='SHOW_MOST_STOCK'>
              Highest quantity
            </InventoryFilterContainer>
          </li>
          <li>
            <InventoryFilterContainer filter='SHOW_ALPHA_STOCK'>
              Alphabetical
            </InventoryFilterContainer>
          </li>
          <li>
            <InventoryFilterContainer filter='SHOW_PRICE_STOCK'>
              Price
            </InventoryFilterContainer>
          </li>
        </ul>
      </section>
    );
  }
};

export default InventoryFilterList;
