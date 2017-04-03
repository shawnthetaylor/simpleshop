import React, { Component } from 'react';
import InventoryFilterContainer from '../../containers/InventoryFilterContainer';
import styles from './InventoryFilterList.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class InventoryFilterList extends Component {
  render() {
    return (
      <section>
        <ul className={ cx('list') }>
          <li>
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
              A <i className='fa fa-arrow-right'></i> Z
            </InventoryFilterContainer>
          </li>
          <li>
            <InventoryFilterContainer filter='SHOW_PRICE_STOCK'>
              $ <i className='fa fa-arrow-right'></i> $$$$
            </InventoryFilterContainer>
          </li>
        </ul>
      </section>
    );
  }
}

export default InventoryFilterList;
