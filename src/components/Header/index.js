import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from './Header.css';

const cx = classNames.bind(styles);

class Header extends Component {
  render() {
    return (
        <header className={ cx('header') }>
          <h1 className={ cx('logo') }>
            <Link to='/' className={ cx('logo-link') }>SimpleShop</Link>
          </h1>
        </header>
    );
  }
}

export default Header;
