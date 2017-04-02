import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './Nav.css';

let cx = classNames.bind(styles);

class Nav extends Component {
  constructor(props, context) {
    super(props, context);

    this.navItems = [
      { icon: '', route: '/', alt: 'add' },
      { icon: '', route: 'inventory', alt: 'list' },
      { icon: '', route: 'cart', alt: 'cart' }
    ];

    this.state = { navOpen: false };

    this.generateNavItems = this.generateNavItems.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  generateNavItems() {
    return this.navItems.map((item, i) => {
      return (
        <li key={ i } className={ cx('item') }>
          <Link to={ item.route }>
            <img src={ item.icon } alt={ item.alt } />
          </Link>
        </li>
      );
    });
  }

  toggleNav() {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render() {
    const mainNavItemClasses = cx('item', 'main', {
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
