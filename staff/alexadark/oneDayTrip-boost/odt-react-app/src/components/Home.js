import React, {Component} from 'react'
import TripList from './TripList'
import api from '../api'
import { withRouter, Route } from "react-router-dom"

//TODO put date and location into the title: This week ...

//TODO geolocalize and show trips for the next 7 days


class Home extends Component{
    constructor(props) {
        super(props)

        this.state = {
            location:'',
            arrival:'',
            departure: '',
  

        }
    }

    // componentDidMount(){
    //     navigator.geolocation.getCurrentPosition(position => {
    //         const lat = position.coords.latitude
    //         const long = position.coords.longitude
    //
    //         api.geoLocalize(lat,long)
    //             .then(location => this.setState({location}))
    //     })
    //
    // }
    searchTrips = () =>{
        const {location, arrival, departure} = this.state
        //Send state in url parametersj
        this.props.history.push(`/home/${location}/${arrival}/${departure}`)
    }

    keepLocation = location => this.setState({location})
    keepArrival = arrival => this.setState({arrival})
    keepDeparture = departure => this.setState({departure})

    render(){
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
                  <form data-uk-grid onSubmit={e => {
                      e.preventDefault();
                      this.searchTrips();
                    }}>
                    <div className="uk-width-1-4">
                      <input type="text" className="uk-input" placeholder="Leaving from..." onChange={e => this.keepLocation(e.target.value.toLowerCase())} value={this.state.location} />
                    </div>
                    <div className="uk-width-1-4">
                      <input type="date" className="uk-input" placeholder="from date" onChange={e => this.keepArrival(e.target.value)} value={this.state.arrival} />
                    </div>
                    <div className="uk-width-1-4">
                      <input type="date" className="uk-input" placeholder="to date" onChange={e => this.keepDeparture(e.target.value)} value={this.state.departure} />
                    </div>
                    <div className="uk-width-1-6">
                      <input type="submit" className="uk-button uk-button-primary" value="Submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="uk-container uk-padding">
              <h2 className="uk-text-center">This week in your area</h2>
            </div>
            <Route path={`/home/:location/:arrival/:departure`} component={TripList} />
          </div>;
    }
}

export default withRouter(Home);