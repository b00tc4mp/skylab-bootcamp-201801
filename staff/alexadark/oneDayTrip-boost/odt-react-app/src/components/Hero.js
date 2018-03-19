import React from 'react';
import Search from './Search';


const Hero = (props) => (
    <div className="hero uk-background-cover uk-background-no-repeat uk-light">
        <div className="uk-container uk-padding-large">
            <div className="hero-content uk-align-center">
                <h2 className="hero-text uk-text-center">Explore the region</h2>
            </div>
            <Search />
        </div>
    </div>
);

export default Hero;