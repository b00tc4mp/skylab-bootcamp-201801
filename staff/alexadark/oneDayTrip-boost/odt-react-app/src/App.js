import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Publish from './components/Publish';
import SignUp from './components/SignUp';
import Home from './components/Home';
import UserPanel from './components/UserPanel';
import UserProfile from './components/UserProfile';
import TripInfo from './components/TripInfo';
import TripList from './components/TripList';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact={true} render={() => (<Redirect to="/home" />)} />
                        <Route path="/home" component={Home} />
                        <Route path="/:username/publish" component={Publish} />
                        <Route path="/sign-up" component={SignUp} />
                        {/*<Route   component={NotFoundPage}/>*/}
                        <Route path="/user-panel" component={UserPanel} />
                        <Route path="/user-profile" component={UserProfile} />
                        <Route path="/trip-info/:tripId" component={TripInfo} />
                        {/*<Route path="/available-trips/:destination"  component={TripList}/>*/}
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
