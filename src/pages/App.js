import React, { Component } from 'react';
import Nav from '../components/Nav';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section>
        <Nav />
        { this.props.children }
      </section>
    );
  }
};

export default App;
