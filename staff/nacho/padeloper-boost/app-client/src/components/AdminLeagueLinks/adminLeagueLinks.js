import React from 'react'
import { NavLink } from 'react-router-dom';
import './css/main.css'
function AdminLeagueLinks(props){
  
    return(
      
        <div className="container">
          <div className="row">
            <div className="col-md-3 leaguelinks">
            <NavLink to = {`/adminleagueplayers/${props.leagueId}`}><span className="linkpanel">Players</span></NavLink>
            </div>
            <div className="col-md-3 leaguelinks">
            <NavLink to = {`/adminleagueteams/${props.leagueId}`}><span className="linkpanel">Teams</span></NavLink>
            </div>
            <div className="col-md-3 leaguelinks">
            <NavLink to = {`/adminleaguematches/${props.leagueId}`}><span className="linkpanel">Matches</span></NavLink>
            </div>
            <div className="col-md-3 leaguelinks">
            <NavLink to = '/adminleaguestats'><span className="linkpanel">Stats</span></NavLink>
            </div>
          </div>
      </div>
    )
}
export default AdminLeagueLinks