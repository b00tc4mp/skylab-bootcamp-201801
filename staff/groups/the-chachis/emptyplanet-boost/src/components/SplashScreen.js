import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import logo from './../img/logo.svg';
 class SplashScreen extends Component {

    handleClick = () => {
        this.props.changePage("PlayerScreen");
        //this.props.callAPI()
    };

    render() {
        return (
            <Jumbotron>
                <img src={logo} className="img-fluid" alt="Responsive" />
                <div>

                    <h5>Do you want to fill your planet?</h5>
                    <p>
                        Show your knowledge about earths population, beat your opponent, and
                        fill up your planet with some population!
          </p>
                    <Button
                        type="button"
                        className="btn"
                        onClick={this.handleClick}
                    >
                        Set Players
          </Button>

                </div>
            </Jumbotron>
        );
    }
}


export default SplashScreen;