import React, {Component} from 'react'
import api from '../api'


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentText: "",
            rating: "",

        }
    }

    comment = ()=>{
        return api.comment(this.props.trip.creator, this.props.user.id, this.state.commentText, this.state.rating)
            .then(res => {
                try {
                    this.setState({closeModal:true})

                }
                catch(error){
                    this.setState({error: res.error})
                }



            })
    }

    keepCommentText = commentText  => this.setState({commentText});
    keepRating= rating => this.setState({rating});

    render() {
        return (
            <div>
                <button className="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                    /*{this.state.loggedIn ? style={display: 'none', opacity: 0}: ''}*/
                        data-uk-toggle="target: #comment">
                    Rate and Comment
                </button>

                <div id="comment"
                     data-uk-modal
                     className={this.state.closeModal ? "closeModal" : ''}>
                    <div className="uk-modal-dialog uk-modal-body">

                        <h2 className="uk-modal-title">Rate and comment this user</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.comment();
                        }}>

                            <div className="uk-margin-bottom" >
                                <label htmlFor="rating">Select your rating</label>
                                <select className="uk-select" id="rating" onChange={e => this.keepRating(e.target.value)}
                                        value={this.state.rating}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="uk-margin-bottom">
                                <textarea rows="8"
                                       className="uk-textarea"
                                       placeholder="Add your comment"
                                       onChange={e => this.keepCommentText(e.target.value)}
                                       value={this.state.commentText}/>
                            </div>
                            <div className="uk-width-1-1 ">
                                <input type="submit"
                                       className="uk-button uk-button-primary uk-width-auto"
                                       value="Submit your opinion"/>
                            </div>
                        </form>
                        {this.state.error? <h2 className="uk-text-center uk-text-danger">{this.state.error}</h2>:''}
                    </div>
                </div>
            </div>
        );
    }
}

CommentForm.propTypes = {};
export default CommentForm;
