'use strict';

function HelloWorld() {
    return <h1>Hello, World!</h1>
}

function Hello(props) {
    return <h1>Hello, {props.name}!</h1>
}

class Calc extends React.Component {
    constructor() {
        console.log('constructor')

        super()

        this.state = {
            a: 0,
            b: 0,
            res: 0
        }
    }

    calculate = (e) => {
        console.log('calculate')

        e.preventDefault()

        //this.state.res = this.state.a + this.state.b

        // this.setState({
        //     res: this.state.a + this.state.b
        // })

        this.setState((prevState) => {
            console.log('set state')

            return {
                res: prevState.a + prevState.b
            }
        })
    }

    keepA = (e) => {
        console.log('keep a')

        this.setState({ a: parseFloat(e.target.value) })
    }

    keepB(e) {
        console.log('keep b')

        this.setState({ b: parseFloat(e.target.value) })
    }

    render() {
        console.log('render')

        return <form onSubmit={this.calculate}>
            <input type="text" onChange={this.keepA} />
            +
            <input type="text" onChange={this.keepB.bind(this)} />
            <button type="submit">=</button>
            <input type="text" disabled value={this.state.res} />
        </form>
    }
}

ReactDOM.render(
    <main>
        <section>
            <HelloWorld />
            <Hello name="John" />

            <Calc />
        </section>
    </main>,
    document.getElementById('root'))