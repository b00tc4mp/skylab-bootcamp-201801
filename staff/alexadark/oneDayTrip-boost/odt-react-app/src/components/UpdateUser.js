import React, {Component} from 'react';
import api from '../api'



class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.user.name,
            surname: '',
            email: '',
            picture: '',
            newPassword: '',
            password: '',

        }


    }



// TODO fix error handling

    componentWillReceiveProps(props) {
        const user = props.user
        console.log(user)
        this.setState({
            name: user.name,
            surname: user.surname,
            email: user.email,
            picture: user.picture,
        })
    }


    update() {
        const {name, surname, email, picture, newPassword, password} = this.state
        const userId = this.props.user._id


        api.updateUser(userId, name, surname, email, picture, newPassword, password)
            .then(res => {
            if (res.status === "OK") {
                this.setState({closeModal: true})
                this.setState({success: res.data})
            } else {
                this.setState({error: res.error})
            }
        })
            .catch(err => this.setState({error: err}))
    }


    keepName = name => this.setState({name});
    keepSurname = surname => this.setState({surname});
    keepEmail = email => this.setState({email});
    keepPicture = picture => this.setState({picture});
    keepNewPassword = newPassword => this.setState({newPassword});
    keepPassword = password => this.setState({password});


    render() {
        return (
            <div className="uk-display-inline">

                <button className="uk-button uk-button-small uk-button-primary uk-margin-small-right"
                        data-uk-toggle="target: #updateProfile">
                    Update Profile
                </button>

                <div id="updateProfile"
                     data-uk-modal
                     className={this.state.closeModal ? "closeModal" : ''}>
                    <div className="uk-modal-dialog uk-modal-body">


                        <h2 className="uk-text-center">Update your profile</h2>
                        <form data-uk-grid
                              onSubmit={e => {
                                  e.preventDefault();
                                  this.update();
                              }}>
                            <div className="uk-width-1-2@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Name"
                                       onChange={e => this.keepName(e.target.value)}
                                       value={this.state.name}/>
                            </div>
                            <div className="uk-width-1-2@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Surname"
                                       onChange={e => this.keepSurname(e.target.value)}
                                       value={this.state.surname}/>
                            </div>
                            <div className="uk-width-1-2@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Email"
                                       onChange={e => this.keepEmail(e.target.value)}
                                       value={this.state.email}/>
                            </div>
                            <div className="uk-width-1-2@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Picture"
                                       onChange={e => this.keepPicture(e.target.value)}
                                       value={this.state.picture}/>
                            </div>
                            <div className="uk-width-1-2@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="New Password"
                                       onChange={e => this.keepNewPassword(e.target.value)}
                                       value={this.state.newPassword}/>
                            </div>
                            <div className="uk-width-1-2@m">
                                <input type="text"
                                       className="uk-input"
                                       placeholder="Password"
                                       required="true"
                                       onChange={e => this.keepPassword(e.target.value)}
                                       value={this.state.password}/>
                            </div>

                            <div>
                                <input type="submit"
                                       className="uk-button uk-button-primary"
                                       value="Update"/>
                            </div>

                        </form>
                        {this.state.error? <h2 className="uk-text-center uk-text-danger">{this.state.error}</h2>:''}
                    </div>
                </div>
            </div>



        )
    }
}


export default UpdateUser;
