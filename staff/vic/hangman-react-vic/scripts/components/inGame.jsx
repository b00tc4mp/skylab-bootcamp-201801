class InGame extends React.Component {
    constructor() {
        super()
        this.state = {
            inputTry: ''
        }
    }

    keepTryInput = e => this.setState({ inputTry: e.target.value })

    render() {
        return (<form class='inGame' onSubmit={
            e => {
                e.preventDefault()
                this.props.onTry(this.state.inputTry)
                this.setState({inputTry: ''})
            }
        }>
            {this.props.valueGameState  !== null ? this.props.valueGameState  === 'error' ? <h1>Hey! WTF are you doing 🤬 😡...</h1> : this.props.valueGameState  ? <h1>Nice! 😁</h1> : <h1>Bad... 🤨</h1>  : <h1>Take it easy 😎</h1>}
            <h1 id="myStatusTitleWord">{this.props.valueAttempts})  {this.props.onPrint()}</h1>

            <input id="inputInGame" type="text" onChange={this.keepTryInput} value={this.state.inputTry} />
            <button type="submit">Try...</button>
        </form>)
    }
}

// function Correcto(){

// }
// function Incorrecto(){

// }

