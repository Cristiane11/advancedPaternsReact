import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import testUncontrolled from './components/testUncontrolled';

import Uncontrolled from './components/uncontrolled'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Uncontrolled />
        <testUncontrolled/>
      </div>
    )
  }
}

export default App
