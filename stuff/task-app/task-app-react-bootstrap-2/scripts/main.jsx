'use strict';

class Task {
    constructor(title) {
        this.id = new Date().getTime()
        //this.id = Task.count++
        this.title = title
        this.done = false
    }

    //static count = 0
}

class TaskApp extends React.Component {
    constructor() {
        super()

        this.state = {
            input: '',
            tasks: []
        }
    }

    keepInput(input) {
        if (input)
            this.setState({ input })
    }

    addTask() {
        this.setState(prevState => ({
            tasks: prevState.tasks.concat(new Task(this.state.input)),

            input: ''
        }))
    }

    checkTask(id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                if (task.id === id)
                    task.done = true

                return task
            })
        }))
    }

    checkAllTasks() {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task => {
                task.done = true

                return task
            })
        }))
    }

    removeTask(id) {
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }))
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <TodoList onAddTask={this.addTask.bind(this)} onKeepInput={this.keepInput.bind(this)} inputValue={this.state.input} onCheckAllTasks={this.checkAllTasks.bind(this)} tasks={this.state.tasks} onCheckTask={this.checkTask.bind(this)} />
                </div>
                <div className="col-md-6">
                    <DoneList tasks={this.state.tasks} onRemoveTask={this.removeTask.bind(this)} />
                </div>
            </div>
        </div>
    }
}

function TodoList(props) {
    return <div className="todolist not-done">
        <h1>Todos</h1>
        <form onSubmit={(e) => { e.preventDefault(); props.onAddTask() }}>
            <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={(e) => props.onKeepInput(e.target.value)} value={props.inputValue} required />
        </form>
        <button id="checkAll" className="btn btn-success" onClick={e => { e.preventDefault(); props.onCheckAllTasks() }}>Mark all as done</button>
        <hr />
        <ul id="sortable" className="list-unstyled">
            {
                props.tasks.map((task) =>
                    task.done ? '' : <li className="ui-state-default" key={task.id}>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" defaultValue onClick={e => { e.preventDefault(); props.onCheckTask(task.id) }} />{task.title}</label>
                        </div>
                    </li>)
            }
        </ul>
        <div className="todo-footer">
            <strong><span className="count-todos">{props.tasks.reduce((accum, task) => task.done ? accum : ++accum, 0)}</span></strong> Items Left
        </div>
    </div>
}

function DoneList(props) {
    return <div className="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" className="list-unstyled">
            {
                props.tasks.map(task =>
                    task.done ? <li key={task.id}>{task.title}
                        <button className="remove-item btn btn-default btn-xs pull-right" onClick={e => { e.preventDefault(); props.onRemoveTask(task.id) }}>
                            <span className="glyphicon glyphicon-remove" />
                        </button>
                    </li> : '')
            }
        </ul>
    </div>
}

ReactDOM.render(<TaskApp />, document.getElementById('root'))