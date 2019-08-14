import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './home/Home';
import './style.css';

class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

render(<App />, document.getElementById('root'));
