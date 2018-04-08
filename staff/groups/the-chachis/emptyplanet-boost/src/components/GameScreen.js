import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import people from './../img/people.svg';
import planetHearth from './../img/planetHearth.svg';
import imgPlayer1 from './../img/player1.svg';
import imgPlayer2 from './../img/player2.svg';
import imgPlayer1Des from './../img/player1_des.svg';
import imgPlayer2Des from './../img/player2_des.svg';
import Counter from "./Counter.js";

 class GameScreen extends Component {

    state = {
        input: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.checkResult(this.state.input)
        this.setState({ input: '' })
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <Jumbotron>
                <div className="boxCounter">
                    <Counter peopleCounter={this.props.countDown} />
                </div>
                <form onSubmit={this.handleSubmit}>
                    <Container>
                        <Row>
                            <Col>
                                {this.props.focusPlayer === 1 ? <img src={imgPlayer1} className="img-fluid justify-content-center" alt="Responsive" /> : <img src={imgPlayer1Des} className="img-fluid justify-content-center" alt="Responsive" />}
                                <div className='score1'>{this.props.score1}</div>
                                <div className='player'>{this.props.player1}</div>
                            </Col>
                            <Col>
                                <div className="card-header">{this.props.name}</div>
                                <div className="card-body">
                                    <p className="card-text">{this.props.messages}</p>
                                </div>
                            </Col>
                            <Col>
                                {this.props.focusPlayer === 2 ? <img src={imgPlayer2} className="img-fluid justify-content-center" alt="Responsive" /> : <img src={imgPlayer2Des} className="img-fluid justify-content-center" alt="Responsive" />}
                                <div className='score2'>{this.props.score2}</div>
                                <div className='player'>{this.props.player2}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    name='tries'
                                    placeholder="Try to guess"
                                    autoFocus={true}
                                    value={this.state.input}
                                    onChange={this.handleChange}
                                    required
                                />&nbsp;{this.props.nextCountry !== 0 ? <Button onClick={this.props.actionButton}>Next</Button> : undefined}
                            </Col>
                        </Row>
                    </Container>
                </form>
            </Jumbotron>
        )
    }
}


export default GameScreen;