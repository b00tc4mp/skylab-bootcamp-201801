class AjaxApp extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: [],
            count: 0
        }
    }

    componentWillMount() {
        console.log('will mount')

        fetch('https://facebook.github.io/react-native/movies.json')
            .then(res => res.json())
            //.then(data => this.setState({movies: data.movies}))
            // COOL! destructuring
            .then(({movies}) => this.setState({movies}))
    }

    componentDidMount() {
        console.log('did mount')
    }

    countUp() {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        console.log('render')

        return <div>
            <h1>Movies list</h1>
            <button onClick={this.countUp.bind(this)}>count up</button>{ this.state.count }
            <ul>
                {
                    this.state.movies.map((movie, index) =>
                        <li key={index}>
                            {`${movie.title} (${movie.releaseYear})`}
                        </li>)
                }
            </ul>
        </div>
    }
}

ReactDOM.render(<AjaxApp />, document.getElementById('root'))