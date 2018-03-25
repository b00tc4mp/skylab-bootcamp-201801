import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import api from './api'

class App extends Component {
  constructor() {
    super()

    this.state = { data: [] }
  }

  componentDidMount() {
    api.list()
      .then(({ data }) => {
        this.setState({ data })
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {this.state.data.map(user => <li key={user.id}>{`${user.name} ${user.surname}`}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
