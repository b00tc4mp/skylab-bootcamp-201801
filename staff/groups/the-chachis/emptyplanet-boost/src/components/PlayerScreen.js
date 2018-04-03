import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import imgPlayer1 from './../img/player1.svg';
import imgPlayer2 from './../img/player2.svg';
import imgPlayer1Des from './../img/player1_des.svg';
import imgPlayer2Des from './../img/player2_des.svg';

class PlayerScreen extends Component {


    handleSubmit = (e) => {
        e.preventDefault()
        const player1 = e.target.elements.player1.value
        const player2 = e.target.elements.player2.value
        this.props.setPlayers(player1, player2)
        this.props.changePage('GameScreen')
        this.props.setSubstractCountDown(true)
    }

    render() {
        return (

            <Jumbotron>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h4>Planet 1</h4>
                        <div className="row justify-content-center">
                            <input type="text" className="form-control col-sm-5" placeholder="Insert your name" name="player1" autoFocus={true} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <h4>Planet 2</h4>
                        <div className="row justify-content-center">
                            <input type="text" className="form-control col-sm-5" placeholder="Insert your name" name="player2" required />
                        </div>
                        <br></br>
                        <Button type="submit" className="btn">Start Game</Button>
                    </div>
                </form>
            </Jumbotron>


        )
    }
}

export default PlayerScreen;