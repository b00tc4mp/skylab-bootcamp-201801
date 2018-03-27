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
import api_client from 'api-client'

//id fernando : 5aaa6bfc76b83f1171dee1e7
//id david : 5aa943f17c14231e4c720233
// id nacho : 5aa7dc25f36d28207a6eeb53
// id ernesto : 5aae7bd56c0443362a32df84
// id biel : 5aa943af7c14231e4c720232
// id lucia : 5aabf804b3ea732a3068f243
// id Carlos : 5aa9441a7c14231e4c720234
// id Julian : 5aae3b0a0b06f733f49e6fda


class Routes extends Component{
    constructor(){
        super()
        this.state = {
            id:"5aa7dc25f36d28207a6eeb53",
            idleague:"",
            user:""
        } 
    }

    setUserId = (id) => {
        this.setState({id})
    }

    componentWillMount(){

        api_client.retrieveUser(this.state.id)
          .then(res => {
            this.setState({user:res.data.data})
        })
        .catch(console.error)
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
                this.state.id ? <AdminIndex idUser = {this.state.id} userInfo = {this.state.user}/> : <Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminmyleagues' render = {()=>(
                <AdminMyLeagues/>
            )}>
            </Route>

            <Route exact path = '/adminleaguecreate' render = {()=>(
                <AdminLeagueCreate userInfo = {this.state.user}/>
            )}>
            </Route>

            <Route path = '/adminleagueplayers/:idOfLeague' render = {routeProps => (
                this.state.id ? <AdminLeaguePlayers {...routeProps} idUser = {this.state.id} userInfo = {this.state.user} />:<Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminleagueteams/:idOfLeague' render = {routeProps => (
                this.state.id ? <AdminLeagueTeams {...routeProps} idUser = {this.state.id} userInfo = {this.state.user}/>:<Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminleaguematches/:idOfLeague' render = {routeProps => (
               this.state.id ?  <AdminLeagueMatches {...routeProps} idUser = {this.state.id} userInfo = {this.state.user}/> :<Login setUserId={this.setUserId}/>
            )}>
            </Route>
        </div>

        );
    }
}
export default Routes