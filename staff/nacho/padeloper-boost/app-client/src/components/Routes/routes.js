import React,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../Home/home'
import Login from '../Login/login'
import Register from '../Register/register'
import AdminIndex from '../AdminIndex/adminIndex'
import AdminMyLeagues from '../AdminMyLeagues/adminMyLeagues'
import AdminLeagueCreate from '../AdminLeagueCreate/adminLeagueCreate'
import AdminLeaguePlayers from '../AdminLeaguePlayers/adminLeaguePlayers'
import AdminLeagueTeams from '../AdminLeagueTeams/adminLeagueTeams'
import AdminLeagueMatches from '../AdminLeagueMatches/adminLeagueMatches'


// setUserID = userID =>{

// }


class Routes extends Component{
    constructor(){
        super()
        this.state = {
            id:"5aa7dc25f36d28207a6eeb53",
            idleague:""
        } 
    }

    setUserId = (id) => {
        this.setState({id})
    }

    render(){
        return(
            <div>
            
            <Route exact path = '/' render = {()=>(
                <Home/>
            )}>
            </Route>

            <Route exact path = '/login' render = {()=>(
                <Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/register' render = {()=>(
                <Register/>
            )}>
            </Route>

            <Route exact path = '/adminleagues' render = {()=>(
                this.state.id ? <AdminIndex/> : <Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminmyleagues' render = {()=>(
                <AdminMyLeagues/>
            )}>
            </Route>

            <Route exact path = '/adminleaguecreate' render = {()=>(
                <AdminLeagueCreate/>
            )}>
            </Route>

            <Route path = '/adminleagueplayers/:idOfLeague' render = {routeProps => (
                this.state.id ? <AdminLeaguePlayers {...routeProps} />:<Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminleagueteams/:idOfLeague' render = {routeProps => (
                this.state.id ? <AdminLeagueTeams {...routeProps}/>:<Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminleaguematches/:idOfLeague' render = {routeProps => (
               this.state.id ?  <AdminLeagueMatches {...routeProps}/> :<Login setUserId={this.setUserId}/>
            )}>
            </Route>
        </div>

        );
    }
}
export default Routes