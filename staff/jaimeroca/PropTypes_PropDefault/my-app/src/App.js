import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Article } from './components/Article.js'
import { Title } from './components/Title.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to PropTypes - defaultProps</h1>
        </header>
        <Article
        //Si eliminamos el author o le pasamos algo diferente a un string, nos dara un error.
          author='Jaime'
          date={new Date().toLocaleDateString()}
          title='About PropTypes'
        >
        <p>Las PropTypes son una forma de validar, los tipos de datos que les pasamos a nuestros componentes. Solo se utilizan mientras desarrollamos, no se pasarán a producción.</p>
        </Article>
        <Title/>
      </div>
    );
  }
}

export default App;