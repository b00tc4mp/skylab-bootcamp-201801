import React from 'react';
import Hero from './Hero';
import TripList from './TripList'

const Home = () => (
    <div>
        <Hero/>
        <div className="uk-container uk-padding">
            <h2 className="uk-text-center">This week in your area</h2>
            <TripList/>
        </div>
    </div>
);

export default Home;