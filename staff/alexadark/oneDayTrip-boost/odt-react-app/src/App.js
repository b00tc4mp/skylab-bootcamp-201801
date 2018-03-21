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

    constructor(props) {
        super(props)
        this.state = {
            user: {
                id: '',
                username: ''
            }
        }
    }

    onUserLoggedIn = (id, username) => {
        this.setState({ user: { id, username } })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header onUserLoggedIn={this.onUserLoggedIn} />
                    <Switch>
                        <Route path="/" exact={true} render={() => (<Redirect to="/home" />)} />
                        <Route path="/home" component={Home} />
                        <Route path="/:username/publish" component={Publish} />
                        <Route path="/sign-up" component={SignUp} />
                        {/*<Route   component={NotFoundPage}/>*/}
                        <Route path="/user-panel/:username" component={UserPanel} />
                        <Route path="/user-profile/:username" component={UserProfile} />
                        <Route path="/trip-info/:tripId" component={TripInfo} />


                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
