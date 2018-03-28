import React from 'react'
import { News } from '../components'

const NewsContainer = (props) => {
    
    return (
            <News 
                 content={props.content}
                 contentType={props.contentType}
                 contentSources={props.contentSources}
                 handleLikes={props.handleLikes}
                 handleUnlikes={props.handleUnlikes}
                 likesId={props.likesId} />
    )
}

export default NewsContainer