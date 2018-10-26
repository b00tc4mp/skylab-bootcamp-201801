import React , {Component}from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { red900, orange900, blue900 } from 'material-ui/styles/colors'

class Alert extends Component {
    constructor(props){
        super(props)
        this.state = { open: true }
    }
    
  handleClose = () => {
    this.setState({open: false});
    this.props.callbackAction()
  };

  render() {
    
    // 0 - Info , 1- Warning , 2 - Error
    const _title = ['Info','Warning','Error'],
          _type = this.props.errorType;
     let  _color;
    
     if (_type === 0 )  _color = blue900
     if (_type === 1 )  _color = orange900 
     if (_type === 2 )  _color = red900

    const  _actions = [
                      <FlatButton
                        label="Ok"
                        style={{ backgroundColor : _color , color : 'white'}}
                        onClick={this.handleClose} />
                      ];
   
    return (

        <Dialog
          title={ _title[_type]}
          actions={_actions}
          modal={true}
          titleStyle={{ margin: 'auto', color: _color}}
  
          bodyStyle={{ display : 'flex' , color : 'white', backgroundColor : _color ,alignItems : 'center', justifyContent : 'center', padding : 24}}
          open={this.state.open}>
          {this.props.errorMessage}
        </Dialog>
    )
  }
}
export default Alert