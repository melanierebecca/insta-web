import React, { Component } from 'react';
import logo from './logo.svg';
import social from './social.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={social} width="400" height="400" alt="social" />
            Hello there.
        </header>
      </div>
    );
  }
}

export default App;