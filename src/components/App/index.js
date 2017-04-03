import React, { Component } from 'react';
import Nav from '../Nav';
import Header from '../Header';
import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section className={ cx('app') }>
        <Nav />
        <Header />
        { this.props.children }
      </section>
    );
  }
};

export default App;
