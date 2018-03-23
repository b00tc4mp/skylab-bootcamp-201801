import React from 'react';
import ColPlayerInitial from './ColsPlayer/ColPlayerInitial'
import ColPlayerName from './ColsPlayer/ColPlayerName'
import ColPlayerPosition from './ColsPlayer/ColPlayerPosition'
import ColPlayerLevel from './ColsPlayer/ColPlayerLevel'
import ColPlayerJoined from './ColsPlayer/ColPlayerJoined'
import ColPlayerButton from './ColsPlayer/ColPlayerButton'

function RowPlayer(props){

        return(
            
                <tr>
                    <ColPlayerInitial />
                    <ColPlayerName/>
                    <ColPlayerPosition />
                    <ColPlayerLevel />
                    <ColPlayerJoined />
                    <ColPlayerButton/>
                </tr>
                
              
              
        )
    
}
export default RowPlayer