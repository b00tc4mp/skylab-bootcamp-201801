import React from 'react';
import ColTeamNumber from './ColsTeam/ColTeamNumber'
import ColTeamName from './ColsTeam/ColTeamName'
import ColTeamPlayer1 from './ColsTeam/ColTeamPlayer1'
import ColTeamPlayer2 from './ColsTeam/ColTeamPlayer2'
import ColTeamButton from './ColsTeam/ColTeamButton'

function RowTeam(props){

    return(
        
            <tr>
                <ColTeamNumber />
                <ColTeamName />
                <ColTeamPlayer1 />
                <ColTeamPlayer2 />
                <ColTeamButton/>
            </tr>
            
          
          
    )

}
export default RowTeam