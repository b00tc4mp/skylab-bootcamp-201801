import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/main.css'

class BoxLeague extends Component{

    render(){
        return(
            <div className="col-md-4">
              <div className="box-league">
                <div className="info-league">
                  <div className="joined">{this.props.maxplayers}</div>
                  <div className="textleague">
                    <p>
                      League <span className="leaguename">{this.props.leagueName} </span> created by <span>Nachal </span>
                      Max players: <span>12</span>                                     
                    </p>
                    <p className="smalltext"><small>{this.props.place} -  2018-03-12 | </small><NavLink exact to = {`/adminleagueplayers/${this.props.idLeague}`}><a><small> View |</small></a></NavLink><a><small> Join</small></a></p>
                  </div>  
                </div>                            
              </div>
            </div>
        )
    }
}
export default BoxLeague