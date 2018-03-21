import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from './components/Routes/routes';
//import Register from './components/Register/index';


class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
          <Routes/>
                  
      </div>
      </HashRouter> 
    );
  }
}

export default App;
