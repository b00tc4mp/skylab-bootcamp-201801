import React from 'react'
import Drawer from 'material-ui/Drawer'
import { QueryForm } from '../components'

const SideBarContainer = (props) => {
    
        return (
                <Drawer open={props.openSideBar}
                   containerStyle={{ backgroundColor : 'rgba(255,255,255,1)' , maxWidth : 275 ,overflowX : 'hidden'}}
                    
                    docked={true}
                    onRequestChange={(open) => props.handleSideBar({ open })}>
                    <QueryForm setSources={props.setSources}
                        handleCloseButton={props.handleSideBar}
                        queryHeadlines={props.queryHeadlines}
                        queryEverything={props.queryEverything}
                        querySources={props.querySources}
                    />
                </Drawer>
        )

}
export default SideBarContainer