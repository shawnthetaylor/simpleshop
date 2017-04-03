import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import classNames from 'classnames/bind';
import styles from './Nav.css';

let cx = classNames.bind(styles);

class Nav extends Component {
  constructor(props, context) {
    super(props, context);

    this.navItems = [
      { className: 'fa fa-plus', route: '/' },
      { className: 'fa fa-list', route: 'inventory' },
      { className: 'fa fa-shopping-cart', route: 'cart' }
    ];

    this.state = { navOpen: false };

    this.generateNavItems = this.generateNavItems.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  generateNavItems() {
    return this.navItems.map((item, i) => {
      const props = {
        to: item.route,
        activeClassName: cx('active'),
        className: cx('nav-item-link')
      };
      const icon = <i className={ item.className } aria-hidden='true'></i>;
      return (
        <li key={ i } className={ cx('box', 'nav-item') }>
          { item.route === '/' ?
            <IndexLink {...props}>
              { icon }
            </IndexLink> :
            <Link {...props}>
              { icon }
            </Link>
          }
        </li>
      );
    });
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    const mainNavItemClasses = cx('main', {
      open: this.state.navOpen
    });

    return (
      <aside className={ cx('nav') }>
        <ul className={ cx('nav-list') }>
          <li className={ mainNavItemClasses } onClick={ this.toggleNav }>
            <div className={ cx('menu') }>
              <span>M</span>
              <span>E</span>
              <span>N</span>
              <span>U</span>
            </div>
            <div className={ cx('hide') }>
              <span>H</span>
              <span>I</span>
              <span>D</span>
              <span>E</span>
            </div>
          </li>
          { this.generateNavItems() }
        </ul>
      </aside>
    );
  }
};

export default Nav;
