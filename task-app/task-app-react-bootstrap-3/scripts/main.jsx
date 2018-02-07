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
            tasks: []
        }
    }    

    addTask(title) {
        this.setState(prevState => ({
            tasks: prevState.tasks.concat(new Task(title))
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
                    <TodoList onAddTask={this.addTask.bind(this)} onCheckAllTasks={this.checkAllTasks.bind(this)} tasks={this.state.tasks} onCheckTask={this.checkTask.bind(this)} />
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
        <InputSubmit onSubmit={props.onAddTask.bind(this)} placeholder={'Add todo'} />
        <SuccessButton onClick={props.onCheckAllTasks} label={'Mark all as done'} />
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

class InputSubmit extends React.Component {
    constructor() {
        super()

        this.state = { input: '' }
    }

    keepInput(input) {
        if (input)
            this.setState({ input })
    }

    submit() {
        this.props.onSubmit(this.state.input)

        this.setState({ input: '' })
    }

    render() {
        return <form onSubmit={(e) => { e.preventDefault(); this.submit() }}>
            <input type="text" className="form-control add-todo" placeholder={this.props.placeholder} onChange={(e) => this.keepInput(e.target.value)} value={this.state.input} required />
        </form>
    }
}

function SuccessButton(props) {
    return <button className="btn btn-success checkAll" onClick={e => { e.preventDefault(); props.onClick() }}>{props.label}</button>
}

function DoneList(props) {
    return <div className="todolist">
        <h1>Already Done</h1>
        <ul id="done-items" className="list-unstyled">
            {
                props.tasks.map(task =>
                    task.done ? <li key={task.id}>{task.title}
                        <RemoveButton onClick={() => { props.onRemoveTask(task.id) }} />
                    </li> : '')
            }
        </ul>
    </div>
}

function RemoveButton(props) {
    return <button className="remove-item btn btn-default btn-xs pull-right" onClick={e => { e.preventDefault(); props.onClick() }}>
        <span className="glyphicon glyphicon-remove" />
    </button>
}

ReactDOM.render(<TaskApp />, document.getElementById('root'))