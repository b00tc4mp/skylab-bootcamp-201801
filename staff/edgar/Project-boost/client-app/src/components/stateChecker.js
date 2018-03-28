import React , {Component} from 'react'; 
import { Step,  Stepper,  StepLabel } from 'material-ui/Stepper';
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import ErrorIcon  from 'material-ui/svg-icons/alert/error'
import ActionDone  from 'material-ui/svg-icons/action/done'


import {red900, orange900, blue900} from 'material-ui/styles/colors'

class StateChecker extends Component{

render(){
 
 
    const stepIndex = this.props.statusStep,
          errorType = this.props.errorType,
          pendingError = this.props.pendingError,
          errored = ( this.props.pendingError );
  
  return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
         
          <Step completed={ stepIndex >= 1 }>
            <StepLabel icon={ errored ? <ErrorIcon color={red900} /> :  <ActionDone color={blue900}/>} 
                       style={ errored ? {color: red900} : {color: blue900}} >
                       {stepIndex <= 1 ? 'Pending' : (errored ? 'Connection failure' : 'Retrieving data')}</StepLabel>
          </Step>
         
          <Step completed={ stepIndex > 2 }>
            <StepLabel
               icon={ pendingError ? <WarningIcon color={orange900} /> :  <ActionDone color={blue900}/>} 
               style={ pendingError ? {color: orange900} : {color: blue900}} >
             {stepIndex < 2 ? 'Pending' : (pendingError ? 'Fail retrieving data' : 'Retrieving data')}</StepLabel>
          </Step>
         
          <Step completed={ stepIndex > 2 }
                style={errorType >= 2 ? {color: red900} : { color : blue900} }>
            <StepLabel>{stepIndex < 3 ? 'Pending' : 'Completed!'}</StepLabel>
          </Step>
        </Stepper>
      </div>
    )
  }
}

export default StateChecker