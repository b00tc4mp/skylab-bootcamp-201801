import React, { Component } from 'react'
import { SideBar } from '../containers'
import AppBar from 'material-ui/AppBar'
import { Toolbar,  ToolbarGroup } from 'material-ui/Toolbar'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionBackup from 'material-ui/svg-icons/action/backup'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'

class HeaderContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            snackOpen: false
        }
    }
 
    handleSideBar = () => this.setState({ open: !this.state.open })
    handleSnackBar = () => this.setState({ snackOpen: false })
    
    render() {
        
        return (
            <div className='fixed'>
            <AppBar style={{ backgroundColor : '#396afc'}}
                    title="3Weeks Project"
                    onLeftIconButtonClick={this.props.contentType !== 2 ? this.handleSideBar : null}>
                <SideBar setSources={this.props.setSources}
                        queryHeadlines={this.props.queryHeadlines}
                        querySources={this.props.querySources}
                        openSideBar={this.state.open}
                        handleSideBar={this.handleSideBar}/>
                        
                </AppBar>
                <Toolbar>
                    <ToolbarGroup >
                        
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <Badge
                            badgeContent={this.props.likesCount}
                            secondary={true}
                            badgeStyle={{top: 20, right: 18}}>
                            <IconButton tooltip="Liked">
                                <ActionFavorite style={{ width : 32, height: 32}}/>
                            </IconButton>
                        </Badge>
                        { this.props.contentType !== 2 ?
                        <RaisedButton labelPosition='after' label='Manage'  primary={true} onClick={this.props.handlePreviewRequest} icon={<RemoveRedEye/>} disabled={this.props.likesCount === 0}/> :
                        <RaisedButton labelPosition='after' label="go back" primary={true} onClick={this.props.handleDisablePreviewRequest} icon={<ActionDone/>}/>
                        }
                        <RaisedButton disabled={ this.props.contentType !==2 } labelPosition='after' label="Save" primary={true} onClick={this.props.handleToggleLikesAll} icon={<ActionBackup/>}/>
                       
                    </ToolbarGroup>
                    <ToolbarGroup lastChild={true}>
                    </ToolbarGroup>    
                </Toolbar>
                <Snackbar
                open={this.props.contentType === 2}
                message="Search bar disabled in this mode"
                autoHideDuration={4000}
                onRequestClose={this.handleSnackBar}/>
            </div>
        )
    }
}
export default HeaderContainer