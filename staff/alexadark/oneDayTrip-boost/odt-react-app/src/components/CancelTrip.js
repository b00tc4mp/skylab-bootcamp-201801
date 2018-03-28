import React, {Component} from 'react'
import api from "../api"
import { withRouter } from "react-router-dom"


class CancelTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // creatorId: '',
            password: ''
        }
    }

    // componentWillReceiveProps() {
    //
    // this.props.onCancelTrip()
    // }

    cancel() {
        api.cancelTrip(this.props.trip.creator, this.props.trip._id,  this.state.password)
            .then(res => {
                if(res.status === 'OK') {
                    this.setState({closeModal: true, password: ''})
                    // this.props.onCancelTrip(this.props.user.username)


                }
                else {
                    this.setState({error: res.error})
                }


            })
            .catch(err => this.setState({error:err}))



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
                     data-uk-modal
                     className={this.state.closeModal ? "closeModal" : ''}>
                    <div className="uk-modal-dialog uk-modal-body uk-width-xxlarge">
                        <h2 className="uk-text-center">Enter your password to confirm the cancellation</h2>
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.cancel()
                            ;
                        }}>


                            <div className="uk-margin-bottom">
                            <input type="password"
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
                        {this.state.error ? <h3 className="uk-alert-danger uk-text-center uk-padding-small">{this.state.error}</h3>: ''}

                    </div>
                </div>
            </div>

        )
    }
}


export default withRouter(CancelTrip);