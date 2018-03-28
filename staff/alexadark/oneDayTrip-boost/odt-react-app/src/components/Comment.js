import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import api from '../api'

//TODO url changes user id but doesn't redirect

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        api.getUserFromId(this.props.comment.user)
            .then((res) => this.setState({user: res.data}))
    }

    ratingTitle = (rating) => {
        switch (rating) {
            case 5:
                return 'Excellent'
                break;
            case 2:
                return 'Could be better'
                break;
            case 3:
                return 'Average'
                break;
            case 4:
                return 'Very Good'
                break;
            default:
                return 'Bad'

        }
    }


    render() {
        const comment = this.props.comment
        const rating = comment.rating
        const user = this.state.user
        console.log(comment)
        return (

            <div className="uk-card uk-card-default uk-card-body uk-margin-bottom">
                <h3>{this.ratingTitle(rating)}</h3>
                Date: {comment.date.slice(0,10)}
                <p>{comment.commentText}</p>

                Author: <NavLink to={`/user-profile/${user._id}`}>
                {user.name} {user.surname}
                </NavLink>

            </div>

        )
    }
}


export default Comment;