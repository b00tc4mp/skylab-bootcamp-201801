import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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

    constructor(props){
        super(props)
        this.state={
            user: {
                id:'',
                username: ''
            }
        }
    }


   onUserLoggedIn = (id, username) =>{
       localStorage.setItem("id",id)
       localStorage.setItem("username", username)
       this.setState({user: {id, username}})
   }

   componentDidMount(){
        const id = localStorage.getItem("id")
       const username = localStorage.getItem("username")
       this.setState({user: {id, username}})
   }

  render() {
    return (
        <BrowserRouter>
            <div>
                <Header onUserLoggedIn={this.onUserLoggedIn} user={this.state.user}/>
                <Switch>
                    <Route path="/" exact={true} render={() => (<Redirect to="/home" />)} />
                    <Route path="/home" component={Home} />
                    <Route path="/publish"  render={() => <Publish  user = {this.state.user}/>}/>
                    <Route path="/sign-up"  component={SignUp}/>
                    {/*<Route   component={NotFoundPage}/>*/}
                    <Route path="/user-panel/:username" render={() => <UserPanel  user = {this.state.user} /> }/>
                    <Route path="/user-profile/:id"  component={UserProfile} />
                    <Route path="/trip-info/:tripId"  render={() => <TripInfo  user = {this.state.user}/>}/>
                    

                </Switch>
            </div>

        </BrowserRouter>
    );
  }
}

export default App;
