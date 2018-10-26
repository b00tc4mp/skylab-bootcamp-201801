import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { HashRouter } from 'react-router-dom'
import lang from './lang'

class App extends Component {
  constructor(){
    super()

    this.state = {
      lang: lang.get()
    }
  }

  changeLang = (_lang) => {
      lang.set(_lang)

      this.setState({lang: lang.get()})
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header lang={this.state.lang} onChangeLang={this.changeLang}/>
          <Main lang={this.state.lang} />
          <Footer lang={this.state.lang} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
