import React, {Component} from 'react';
import api from '../api'


class UpdateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: '',
            email: '',
            picture: '',
            newPassword: '',
            password: ''
        }


    }
//TODO add values from props user to the state, so values are not erased when we don;t enter a value
    componentWillReceiveProps(){
        const user = this.props.user
        this.setState({
            name: user.name,
            surname: user.surname,
            email: user.email,
            picture: user.picture,
        })
    }


    register() {
        const {name, surname, email, picture, newPassword, password} = this.state
        const userId = this.props.user._id


        api.updateUser(userId, name, surname, email, picture, newPassword, password)


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
                     data-uk-modal>
                    <div className="uk-modal-dialog uk-modal-body">
                        <button className="uk-modal-close-default"
                                type="button"
                                uk-close/>

                        <h2 className="uk-text-center">Update your profile</h2>
                        <form data-uk-grid
                              onSubmit={e => {
                                  e.preventDefault();
                                  this.register();
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
                    </div>
                </div>
            </div>



        )
    }
}


export default UpdateUser;