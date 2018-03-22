import React from 'react'
import './styles/main.css'

class Input extends React.Component {
    constructor() {
        super()

        this.state = {
            value: ""
        }
    }

    onChange = e => {
        this.setState({ value: e.target.value })
    }

    getValue = () => {
        /*
        const { value } = this.state
        let message = ""
        switch (this.props.typeInput) {
            case "email":
                const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
                if (!regex.test(this.state.value))
                    message = "El email introducido tiene un formato incorrecto"
                break
            case "tel":
                if (isNaN(this.state.value))
                    message = "El telefono introducido tiene un formato erroneo"
                break
            default:
                return this.state.value
        }*/
        return this.state.value


    }

    render() {
        return <div>
            <input type={this.props.typeInput} className={this.props.classInput} placeholder={this.props.placeholderInput} onChange={this.onChange}/>
        </div>
    }
}

export default Input
