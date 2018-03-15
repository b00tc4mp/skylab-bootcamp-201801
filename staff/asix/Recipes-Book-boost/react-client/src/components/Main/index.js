import React, { Component } from 'react'
import './index.css'
import { Route } from 'react-router-dom';
import Home from '../Home'
import Category from '../Category'
import Collection from '../Collection'

class Main extends Component {
    render() {
        return (
            <div>
                
                <Route exact path="/" render={() => (
                    <Home/>
                )}/>

                <Route exact path="/category" render={() => (
                    <Category/>
                )}/>

                <Route exact path="/collection" render={() => (
                    <Collection/>
                )}/>

            </div>
        );
    }
}

export default Main