import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/main.css'

class BoxLeagueNot extends Component{

    render(){
        return(
            <div className="col-md-4">
              <div className="box-league">
                <div className="info-league">
                  <div className="joined">{this.props.leagueInfo.players? this.props.leagueInfo.players.length:""}</div>
                  <div className="textleague">
                    <p>
                      League <span className="leaguename">{this.props.leagueInfo.name} </span>
                      Max players: <span className ="leaguename">{this.props.leagueInfo.maxplayers}</span> <br/>  
                      type: {this.props.leagueInfo.type} - {this.props.leagueInfo.category}ª                                 
                    </p>
                    <p className="smalltext"><small>{this.props.leagueInfo.city}  | </small><NavLink exact to = {`/adminleagueplayers/${this.props.leagueInfo._id}`}><small><span className="leaguename"> View</span> </small></NavLink></p>
                  </div>  
                </div>                            
              </div>
            </div>
        )
    }
}
export default BoxLeagueNot