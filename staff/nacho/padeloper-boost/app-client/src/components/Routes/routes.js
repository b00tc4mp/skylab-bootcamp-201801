import React,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../Home/home'
import Login from '../Login/login'
import Register from '../Register/register'
import AdminIndex from '../AdminIndex/adminIndex'
import AdminStats from '../AdminStats/adminStats'
import AdminMyLeagues from '../AdminMyLeagues/adminMyLeagues'
import AdminLeagueCreate from '../AdminLeagueCreate/adminLeagueCreate'
import AdminLeaguePlayers from '../AdminLeaguePlayers/adminLeaguePlayers'
import AdminLeagueTeams from '../AdminLeagueTeams/adminLeagueTeams'
import AdminLeagueMatches from '../AdminLeagueMatches/adminLeagueMatches'
import AdminLeagueStats from '../AdminLeagueStats/adminLeagueStats'
import api_client from 'api-client'


//id admin: 5ab6bd0bee5bd204b7154638
//id player 1: 5ab6be73ee5bd204b715463a
//id player 2 : 5ab6be82ee5bd204b715463b
//id player 3 : 5ab6be8fee5bd204b715463c
//id player 4 : 5ab6c55baef01204e2b9bc3a
//id player 5 : 5ab6c566aef01204e2b9bc3b
//id player 6 : 5ab6c573aef01204e2b9bc3c
//id player 7 : 5ab6c580aef01204e2b9bc3d
//id player 8 : 5ab6c58caef01204e2b9bc3e
//id player 9 : 5ab6c599aef01204e2b9bc3f
//id player 10 : 5ab6c58caef01204e2b9bc3e

// id mario : 5abb3847e7554613c72f5fa8
// id edgar : 5abb38bce7554613c72f5fa9
// id didac : 5abb38fbe7554613c72f5faa
// id victor : 5abb9f6bd56a2e251e0fc3df
// id alexandra : 5abba22bd56a2e251e0fc3e8
// id alexsanchez : 5abba23ad56a2e251e0fc3e9
// id alexprofe: 5abba253d56a2e251e0fc3ea
// id michelprofe: 5abba25dd56a2e251e0fc3eb
// id manuprofe: 5abba269d56a2e251e0fc3ec
// id david: 5abba2d3d56a2e251e0fc3ed
// id nachal: 5abba336d56a2e251e0fc3ee
// id carlossanchez : 5abb9fa5d56a2e251e0fc3e0
// id pink: 5abb9fb1d56a2e251e0fc3e1
// id asier: 5abba0b7d56a2e251e0fc3e2
// id rober: 5abba0dbd56a2e251e0fc3e3
// id jaimeru: 5abba16fd56a2e251e0fc3e4
// id jaimero: 5abba1bad56a2e251e0fc3e5
// id demi: 5abba1f0d56a2e251e0fc3e6
// id carlosramos: 5abba208d56a2e251e0fc3e7
// id pablo: 5abba3b8d56a2e251e0fc3f6

class Routes extends Component{
    constructor(){
        super()
        this.state = {
            id:"5ab6bd0bee5bd204b7154638",
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

            <Route exact path = '/adminstats' render = {()=>(
                this.state.id ? <AdminStats idUser = {this.state.id} userInfo = {this.state.user}/> : <Login setUserId={this.setUserId}/>
            )}>
            </Route>

            <Route exact path = '/adminmyleagues' render = {()=>(
                this.state.id ? <AdminMyLeagues idUser = {this.state.id} userInfo = {this.state.user}/> : <Login setUserId={this.setUserId}/>
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

            <Route exact path = '/adminleaguestats/:idOfLeague' render = {routeProps => (
               this.state.id ?  <AdminLeagueStats {...routeProps} idUser = {this.state.id} userInfo = {this.state.user}/> :<Login setUserId={this.setUserId}/>
            )}>
            </Route>
        </div>

        );
    }
}
export default Routes