import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (

      <HashRouter>
        <div>
          <Header />

          <Main />

          <Footer />
        </div>
      </HashRouter>

    )
  }
}

export default App;
