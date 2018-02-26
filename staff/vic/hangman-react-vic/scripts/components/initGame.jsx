class InitGame extends React.Component {
    constructor() {
        super()
        this.state = {
            inputInitWord: '',
            inputAttempts: ''
        }
    }
    keepInputWord = e =>  this.setState({ inputInitWord: e.target.value.toLowerCase() })

    keepInputAttempts = e => this.setState({ inputAttempts: parseInt(e.target.value) })

    render() {
        return (<form class='initGame' onSubmit={
            e => {
                e.preventDefault()
                this.props.onInputWord(this.state.inputInitWord, this.state.inputAttempts)
            }
        }>
            <h1>Insert a word to play in HangPredator</h1>
            <input id="inputInitWordGame" placeholder='word' name= 'inputWord' type="text" onChange={this.keepInputWord} value={this.state.inputInitWord} /> 
            <input id="inputAttemptsGame" placeholder='attempts' name='inputAttempts' type="number" onChange={this.keepInputAttempts} value={this.state.inputAttempts} />
            <button type="submit">DONE!</button>
        </form>)
    }

}