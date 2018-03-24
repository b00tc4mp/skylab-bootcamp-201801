import React, {Component} from 'react'
import Comment from './Comment'
// import {withRouter} from 'react-router-dom'
import api from '../api'
import TripListItem from './TripListItem'


class UserProfile extends Component {
    constructor(){
        super()
        this.state ={
            user:{
                comments: []
            },
            trips: []
        }
    }

    componentDidMount(){
        const creatorId = this.props.match.params.id
        api.getUserFromId(creatorId)
            .then((res) => this.setState({user: res.data}))

        api.listUserPublishedTrips(creatorId)
            .then(res => this.setState({trips: res.data}))

    }
    render() {
        const user = this.state.user
        const comments = user.comments
        return (
            <div className="uk-container">
                <span data-uk-icon="icon: user; ratio: 2"></span>

                {user.name} {user.surname} <br/>
                {comments.length>0 ? `Rating: ${user.comments.reduce((rating, comment) =>{return rating += comment.rating/user.comments.length},0)}`: ''}<br/>
                <h2 className="uk-text-center">Comments received by {user.name} {user.surname}</h2>
                <div className="Comment-list">
                    {this.state.user.comments.map((comment, index) => <Comment comment={comment} key={index}/>)}
                </div>
                <h2 className="uk-text-center">Trips Created by {user.name} {user.surname}</h2>
               <div className="trip-list uk-container">
                    {this.state.trips.map((trip, index) => <TripListItem trip={trip} key={index}/>)}
                </div>



            </div>
        );
    }
}


export default UserProfile
