import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

import InlineNav from '../InlineNav';
import styles from './Header.css';

const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    return (
        <header className={ cx('header') }>
          <h1 className={ cx('logo') }>
            <Link to='/' className={ cx('logo-link') }>SimpleShop</Link>
            <p className={ cx('sub') }>( Work&Co Interview )</p>
          </h1>
          <InlineNav />
        </header>
    );
  }
};

export default Header;
