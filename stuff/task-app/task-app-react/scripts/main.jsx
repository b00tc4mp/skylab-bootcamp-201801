'use strict';

class TaskApp extends React.Component {
    constructor() {
        super()

        this.state = {
            input: '',
            tasks: []
        }
    }

    keepInput = e => this.setState({ input: e.target.value })

    addTask = e => {
        e.preventDefault()

        this.setState(prevState => { 
            return {
                // tasks: prevState.tasks.concat(this.state.input)
                tasks: [...prevState.tasks, this.state.input],
                input: ''
            }
        })

        // COMPRESSED version! (WARN!)
        // this.setState(prevState => ({ tasks: [...prevState.tasks, this.state.input], input: '' }))
    }


    // removeTask = index => this.setState(prevState => ({ tasks: prevState.tasks.filter((task, _index) => index !== _index) }))

    // UNCOMPRESSED version ,)
    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => {
                    return index !== _index
                })
            }
        })
    }

    render() {
        return <div>
            <form onSubmit={this.addTask}>
                <input type="text" className="round-blue-input" placeholder="Input task" onChange={this.keepInput} value={this.state.input} />
                &nbsp;
            <button type="submit" className="round-red-button">Add</button>
            </form>
            <ul>
                {this.state.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
                    e.preventDefault()

                    this.removeTask(index)
                }}>🗑</a></li>)}
            </ul>
        </div>
    }
}

ReactDOM.render(<TaskApp />,
    document.getElementById('root'))