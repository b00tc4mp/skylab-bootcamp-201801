import React from 'react'
import {StateChecker} from '../components';
import Paper from 'material-ui/Paper'

const BigInfoContainer = ( props ) => {

return ( 
        <Paper>
        { props.statusStep < 3 ? <StateChecker statusStep={props.statusStep}
                                               pendingError={props.pendingError} 
                                               errorType={props.errorType}/> : '' }
        </Paper>
       )
}

export default  BigInfoContainer