import React from 'react';
import Comment from './Comment'


const UserProfile = () => (
    <div className="uk-container">
        <span data-uk-icon="icon: user; ratio: 2"></span>
        Name <br/>
        Rating <br/>
        Number or trips offered
        <div className="Comment-list">
            <Comment/>
            <Comment/>
            <Comment/>
        </div>

    </div>

);

export default UserProfile;