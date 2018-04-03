import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import imgPlayer1 from './../img/player1.svg';
import imgPlayer2 from './../img/player2.svg';
import imgPlayer1Des from './../img/player1_des.svg';
import imgPlayer2Des from './../img/player2_des.svg';


class FinalScreen extends Component {

    render() {
        return (
            <Jumbotron>
                <h3>And the winner is:</h3>
                {this.props.score1 >= this.props.score2 ?
                    <div><img src={imgPlayer1} className="img-fluid justify-content-center" alt="Responsive" /> <h1>Congratulations {this.props.player1} </h1> </div> :
                    <div> <img src={imgPlayer2} className="img-fluid justify-content-center" alt="Responsive" /> <h1>Congratulations {this.props.player2} </h1> </div>}
            </Jumbotron>
        );
    }
}

export default FinalScreen;