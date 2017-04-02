import React, { Component } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section>
        <Nav />
        <Header />
        { this.props.children }
      </section>
    );
  }
};

export default App;
