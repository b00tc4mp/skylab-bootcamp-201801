import React from 'react';
function ColTeamButton(props) {
    return (
         <td><button type="button" className="btn btn-primary btn-sm removebutton" onClick = {props.editTeam}>Edit</button></td>
    )
}

export default ColTeamButton