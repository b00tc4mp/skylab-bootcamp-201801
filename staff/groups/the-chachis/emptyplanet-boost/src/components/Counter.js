import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import GameScreen from "./GameScreen.js";
import people from './../img/people.svg';
import planetHearth from './../img/planetHearth.svg';

function Counter(props) {

    return (

        <div className="card border-primary mb-3">
            <h3><img src={people} alt='' />{props.peopleCounter}</h3>


        </div>


    )
}


export default Counter;