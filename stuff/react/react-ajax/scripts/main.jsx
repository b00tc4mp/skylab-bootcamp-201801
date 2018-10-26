class AjaxApp extends React.Component {
    constructor() {
        super()

        this.state = {
            movies: []
        }
    }

    loadMovies() {
        fetch('https://facebook.github.io/react-native/movies.json')
            .then(res => res.json())
            //.then(data => this.setState({movies: data.movies}))
            // COOL! destructuring
            .then(({movies}) => this.setState({movies}))
    }

    render() {
        return <div>
            <button onClick={this.loadMovies.bind(this)}>Load movies</button>
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