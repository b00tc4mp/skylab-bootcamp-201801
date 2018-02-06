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

    addTask = () => {


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
            <TaskInput onAddTask={this.addTask} onInputChange={this.keepInput} inputValue={this.state.input} />
            <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
        </div>
    }
}

function TaskInput(props) {
    return <form onSubmit={e => {
        e.preventDefault()

        props.onAddTask()
    }
    }>
        <input type="text" className="round-blue-input" placeholder="Input task" onChange={props.onInputChange} value={props.inputValue} />
        &nbsp;
        <button type="submit" className="round-red-button">Add</button>
    </form>
}

function TaskList(props) {
    return <ul>
        {props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
            e.preventDefault()

            props.onRemoveTask(index)
        }}>🗑</a></li>)}
    </ul>
}

/*
<div>
    <InputTask />
    <TaskList />
</div>
*/

ReactDOM.render(<TaskApp />,
    document.getElementById('root'))