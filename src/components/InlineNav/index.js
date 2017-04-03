import React, { Component } from 'react';
import styles from './InlineNav.css';
import classNames from 'classnames/bind';
import { Link, IndexLink } from 'react-router';

const cx = classNames.bind(styles);

class InlineNav extends Component {
  constructor(props, context) {
    super(props, context);

    this.navItems = [
      { name: 'Warehouse', route: '/' },
      { name: 'Inventory', route: 'inventory' },
      { name: 'Cart', route: 'cart' }
    ];

    this.generateNavItems = this.generateNavItems.bind(this);
  }

  generateNavItems() {
    return this.navItems.map((item, i) => {
      const props = {
        to: item.route,
        className: cx('item-link'),
        activeClassName: cx('active')
      };
      return (
        <li key={ i } className={ cx('item') }>
          { item.route === '/' ?
            <IndexLink {...props}>
              { item.name }
            </IndexLink> :
            <Link {...props}>
              { item.name }
            </Link>
          }
        </li>
      );
    });
  }

  render() {
    return (
      <ul className={ cx('list') }>
        { this.generateNavItems() }
      </ul>
    );
  }
}

export default InlineNav;
