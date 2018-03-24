import React, {Component} from 'react';
import api from '../api'
import { withRouter } from "react-router-dom"


class CancelTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            creatorId: '',
            password: ''
        }
    }

    componentDidMount() {
        api.getUsernameId(this.props.match.params.username)
            .then((res) => this.setState({creatorId: res.data}))

    }

    cancel() {
        const {creatorId,  password} = this.state

        api.cancelTrip(creatorId, this.props.trip._id,  password)

            .then(() => this.setState({
                creatorId: '',
                password: ''

            }))


    }


    keepPassword = password => this.setState({password})


    render() {
        return (
            <div className="uk-display-inline">
                <button className="uk-button uk-button-small uk-button-primary uk-margin-small-bottom"
                        data-uk-toggle="target: #cancelTrip">
                    Cancel Trip
                </button>


                <div id="cancelTrip"
                     data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body uk-width-xxlarge">
                        <button className="uk-modal-close-default"
                                type="button"
                                uk-close/>
                        <h2 className="uk-text-center">Enter your password to confirm the cancellation</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.cancel();
                        }}>


                            <div className="uk-margin-bottom">
                            <input type="text"
                                  className="uk-input"
                                  placeholder="Password"
                                  required="true"
                                  onChange={e => this.keepPassword(e.target.value)}
                                  value={this.state.password}/>
                            </div>
                            <div>
                                <input type="submit"
                                       className="uk-button uk-button-primary uk-width-auto"
                                       value="Cancel Trip"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        )
    }
}


export default withRouter(CancelTrip);