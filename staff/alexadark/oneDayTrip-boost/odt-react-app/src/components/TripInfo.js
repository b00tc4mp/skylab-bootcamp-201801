import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class TripInfo extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="uk-container">
               <div className="basic-info-data uk-h4 uk-margin-large-bottom">
                   From departure to arrival place <br/>
                   Km, Trip time <br/>
                   Date
               </div>
                <div className="trip-panels" data-uk-grid>
                    <div className="uk-width-2-3@m">
                        <div className="uk-card uk-card-default uk-card-body">
                            <span data-uk-icon="icon: user; ratio: 2"></span>
                            name <br/>
                            meeting point <br/>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et id iusto minima molestiae nemo obcaecati omnis, pariatur voluptate. Adipisci aut cum cumque inventore ipsum maxime nihil saepe sed unde velit?</p>
                        </div>
                    </div>
                    <div className="uk-width-1-3@m">
                        <div className="uk-card uk-card-default uk-card-body">Price <br/>
                            Passengers on this trip
                            <div className="passengers uk-flex"
                                 >
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                                <span data-uk-icon="icon: user; ratio: 2"></span>
                            </div>
                            4 seats available
                            <div className="book-button uk-flex uk-flex-center">
                                <button className="uk-button uk-button-primary">
                                    Book!
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}


export default TripInfo;