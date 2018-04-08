import React from 'react';
function ColPlayerButton(props) {
    return (
         <td><button type="button" className="btn btn-primary btn-sm removebutton" onClick = {props.remove}>Remove</button></td>
    )
}

export default ColPlayerButton