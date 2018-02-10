
class HangPredator extends React.Component {
    constructor() {
        super()
        this.state = {
            word: '',
            attempts: '',
            gameState: null,
            endGame: false,
            correctLetters: []
        }
    }
    inputWord = (_word, _attempts) => {
        this.setState({
            word: _word,
            attempts: _attempts
        })
    }
    try = string => {
        if (string && isNaN(string)) {
            if (this.state.attempts <= 1) {
                return this.setState({
                    endGame: true,
                    gameState: false
                })
            }

            return string.length > 1 ? this.inputedWord(string.toLowerCase()) : this.inputedLetter(string.toLowerCase())  
        }
        
        return this.setState({ gameState: 'error' })
    }
    inputedWord = _word => {
        if (_word === this.state.word) {
            return this.setState(prevState => ({
                attempts: 0,
                endGame: true,
                correctLetters: [...prevState.correctLetters, _word.split("").map(el => [].push(el))],
                gameState: true
            }))
        }

        return this.setState({
            endGame: true,
            attempts: 0,
            gameState: false
        })
    }
    inputedLetter = _letter => {
        if (this.state.word.includes(_letter)) {
            let correctLetterConditional = [...this.state.correctLetters, _letter]

            if (this.state.word.split("").every(el => correctLetterConditional.includes(el))) return this.setState(prevState => ({
                correctLetters: correctLetterConditional,
                gameState: true,
                endGame: true
            }))
            return this.setState(prevState => ({
                correctLetters: correctLetterConditional,
                gameState: true
            }))
        }

        return this.setState(prevState => ({
            attempts: prevState.attempts - 1,
            gameState: false
        }))
    }
    print = () => {
        return this.state.word.split("").map(el => (this.state.correctLetters.includes(el)) ? el : "_").join(" ")
    }

    replay = () => {
        this.setState({
            word: '',
            attempts: '',
            gameState: null,
            endGame: false,
            correctLetters: []
        })
    }

    render() {
        console.log(this.state)
        return (
            <section>
                {!this.state.endGame ? //if NO endGame ...
                    this.state.word ?  //if inputed word...
                        <InGame
                            onTry={this.try}
                            onPrint={this.print}
                            valueAttempts={this.state.attempts}
                            valueGameState={this.state.gameState} />
                        :  //else...
                        <InitGame
                            onInputWord={this.inputWord} />
                    : //else
                    <EndGame
                        onReplay={this.replay}
                        valueGameState={this.state.gameState}
                        valueWord = {this.state.word} />}
            </section>
        )
    }
}