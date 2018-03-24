import React, {Component} from 'react'
import api from '../api'


class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: "",
            rating: "",

        }
    }

    comment = ()=>{
        return api.comment(this.props.trip.creator, this.props.user.id, this.state.comment, this.state.rating)
    }

    keepComment = comment  => this.setState({comment});
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
                     data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                        <button className="uk-modal-close-default"
                                type="button"
                                uk-close/>
                        <h2 className="uk-modal-title">Rate and comment this user</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.comment();
                        }}>

                            <div className="uk-margin-bottom" >
                                <label htmlFor="rating">Seelect your rating</label>
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
                                <textarea row="8"
                                       className="uk-textarea"
                                       placeholder="Add your comment"
                                       onChange={e => this.keepComment(e.target.value)}
                                       value={this.state.comment}/>
                            </div>
                            <div className="uk-width-1-1 ">
                                <input type="submit"
                                       className="uk-button uk-button-primary uk-width-auto"
                                       value="Submit your opinion"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

CommentForm.propTypes = {};
export default CommentForm;
