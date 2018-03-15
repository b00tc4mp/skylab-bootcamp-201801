/* WARN! app doesn't work correctly yet, and the following code requires a correction:

<TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
<TaskListFinish tasksFinish={this.state.tasksFinish} onRemoveTask={this.addTaskFinish} />

NOTE onRemoveTask should not be handled by TaskListFinish, it's already handled by TaskList (which is right). TaskListFinish is a 'dumb' component that should on list the 'removed tasks'.
*/

class TaskApp extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            tasks: [],
            tasksFinish: []
        }
    }
 
    keepInput = e => this.setState({ input: e.target.value })
 
    addTask = () => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.concat(this.state.input),
                input: ''
            }
        })
    }
 
    addTaskFinish = index => {
        this.setState(prevState => {
            return {
                tasksFinish: prevState.tasksFinish.concat(this.state.tasks[index])
            }
        })
    }
 
    removeTask = index => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter((task, _index) => index !== _index)
            }
        })
    }
 
    render() {
        return <div>
            <TaskInput onAddTask={this.addTask} onInputChange={this.keepInput} inputValue={this.state.input} />
            <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
            <TaskListFinish tasksFinish={this.state.tasksFinish} onRemoveTask={this.addTaskFinish} />
        </div>
    }
 }
 
 function TaskInput(props) {
    return <form onSubmit={e => {
        e.preventDefault()
        props.onAddTask()
    }}>
        <input type="text" className="round-blue-input" placeholder="Input task" onChange={props.onInputChange} value={props.inputValue} />
        <button type="submit" className="round-red-button">ADD!</button>
    </form>
 
 }
 
 function TaskList(props) {
    return <ul>
        {props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={(e) => {
            e.preventDefault();
            props.onRemoveTask(index)
        }}>🗑</a></li>)}
    </ul>
 }
 
 function TaskListFinish(props) {
    return <ul>
        {props.tasksFinish.map((task, index) => <li>{task}</li>)}
    </ul>
 }
 
 ReactDOM.render(<TaskApp />,
    document.getElementById('root')); 