import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    handlerChange = (value, name) => {
        this.setState({ value })
        this.props.handlerChangeInput(value, name)
    }

    render() {
        return (
            <input
                type={this.props.type}
                value={this.props.value ? this.props.value : this.state.value}
                name={this.props.name}
                className={this.props.className}
                onChange={(e) => this.handlerChange(e.target.value, e.target.name)} />
        );
    }
}

export default Input