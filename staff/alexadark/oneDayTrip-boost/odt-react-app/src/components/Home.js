import React, {Component} from 'react'
import TripList from './TripList'
import api from '../api'
import {withRouter, Route} from "react-router-dom"
import moment from 'moment'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            arrival: '',
            departure: '',
            spinner: 'hidden',
            searchAround: '',
            trips: []


        }
    }

    componentDidMount() {


    }

    searchAround() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            if (this.state.location === '') {
                api.geoLocalize(lat, long)
                    .then(res => {

                        const location = res.results[7].address_components[1].long_name.toLowerCase()
                        const arrival = moment().format().slice(0, 10)
                        const departure = moment().add(7, 'days').format().slice(0, 10)
                        this.setState({location, arrival, departure, spinner:'hidden'})

                        this.search()
                    })
            }
        })

        this.state.trips.length < 1  ? this.setState({spinner: 'spinner'}) :
            this.setState({spinner: 'hidden'})
    }

        searchTrips = () => {


            this.search()


        }

        search = ()=>{
            const {location, arrival, departure} = this.state
            this.props.history.push(`/home/${location}/${arrival}/${departure}`)
        }

        keepLocation = location => this.setState({location})
        keepArrival = arrival => this.setState({arrival})
        keepDeparture = departure => this.setState({departure})

        render()
        {
            const trips = this.state.trips
            return <div>
                <div className="search">
                    <div className="hero uk-background-cover uk-background-no-repeat uk-light">
                        <div className="uk-container uk-padding-large">
                            <div className="hero-content uk-align-center">
                                <h2 className="hero-text uk-text-center">
                                    Explore the region
                                </h2>
                            </div>
                            <form data-uk-grid
                                  onSubmit={e => {
                                      e.preventDefault();
                                      this.searchTrips();
                                  }}>
                                <div className="uk-width-1-4">
                                    <input type="text"
                                           className="uk-input"
                                           placeholder="Leaving from..."
                                           required="true"
                                           onChange={e => this.keepLocation(e.target.value.toLowerCase())}
                                           value={this.state.location}/>
                                </div>
                                <div className="uk-width-1-4">
                                    <input type="date"
                                           className="uk-input"
                                           placeholder="from date"
                                           required="true"
                                           onChange={e => this.keepArrival(e.target.value)}
                                           value={this.state.arrival}/>
                                </div>
                                <div className="uk-width-1-4">
                                    <input type="date"
                                           className="uk-input"
                                           placeholder="to date"
                                           required="true"
                                           onChange={e => this.keepDeparture(e.target.value)}
                                           value={this.state.departure}/>
                                </div>
                                <div className="uk-width-1-6">
                                    <input type="submit"
                                           className="uk-button uk-button-primary"
                                           value="Submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
 <div className="uk-flex uk-flex-center uk-padding">
     <div className={`uk-button uk-button-primary ${this.state.searchAround}`} onClick={()=>this.searchAround()}>
         Search Trips Around You
     </div>
 </div>

                <div>
                    <div className={`uk-container uk-padding ${this.state.spinner}`}>
                        <h2 className="uk-text-center">Searching trips around you in the next 7 days</h2>
                    </div>
                    <ul className={this.state.spinner}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <Route path={`/home/:location/:arrival/:departure`} component={TripList} />
            </div>
        }
    }

    export
    default

    withRouter(Home);