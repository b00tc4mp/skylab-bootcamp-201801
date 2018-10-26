import React from 'react'

function InfoLeague(props){
    return(
        <div className="container">
            <div className="row">
                <h3 className ="title">{props.leagueInfo.name}</h3>
                <p className = "text-explanation">
                    This league is <span className="leaguename">{props.leagueInfo.type}</span> and it is currently available for <strong>{props.leagueInfo.maxplayers} players</strong>.
                    To join this league you just have to press join button at players screen. When max players reached teams will be generated.
                    
                    {/* Current number of players:{props.leagueInfo.players.length}  */}
                    
                </p>
            </div>
          </div>
    )
}
export default InfoLeague