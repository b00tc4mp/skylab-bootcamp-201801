/* WARN! input logic is managed by parent component TaskApp

       this.state = {
           input: '',
           tasks: [],
           doneTasks: []
       }

    keepInput = e => this.setState({input: e.target.value})

NOTE this logic forces the parent component to know about how to handle the value ( e.target.value) provided from a child component (TaskInput), and does not separate concerns. TaskInput should handle that logic and manage that input state, instead, and just transfer the parent component the input value already prepared.
*/

'use strict';

class TaskApp extends React.Component {
   constructor() {
       super()
       this.state = {
           input: '',
           tasks: [],
           doneTasks: []
       }

   }

   keepInput = e => this.setState({input: e.target.value})

   addTask = () => {
       this.setState(prevState => {
           return {
               tasks: [...prevState.tasks, this.state.input],
               input: ''
           }
       })

   }

   removeTask = index => {
       this.setState(prevState => {
           return {
               doneTasks: [...prevState.doneTasks, prevState.tasks[index]],
               tasks: prevState.tasks.filter((task, _index) => {
                   return index !== _index
               })
           }
       })
   }

   render() {
       return <div>
           <TaskInput onAddTask={this.addTask}
                      onInputChange={this.keepInput}
                      inputValue={this.state.input}/>
           <TaskList tasks={this.state.tasks}
                     onRemoveTask={this.removeTask}/>
           <DoneTasksList doneTasks={this.state.doneTasks}/>
       </div>
   }
}

function TaskInput(props) {
   return (
       <form onSubmit={e => {
           e.preventDefault()
           props.onAddTask()
       }}>
           <input className="round-blue-input"
                  type="text"
                  placeholder="Input Task"
                  onChange={props.onInputChange}
                  value={props.inputValue}/> &nbsp;
           <button className="round-red-button"
                   type="submit">Add
           </button>
       </form>
   )
}

function TaskList(props) {
   return (
       <ul>
           {props.tasks.map((task, index) => <li>{task} &nbsp; <a onClick={ e => {
               e.preventDefault()
               props.onRemoveTask(index)
           }
           }>🗑</a></li>)}
       </ul>
   )
}

function DoneTasksList(props) {
   return props.doneTasks.length > 0 ?
       <div>
           <h2>Done Tasks</h2>
           <ul>
               {props.doneTasks.map(task => <li>{task}</li>)}
           </ul>
       </div>
   : '';
}

ReactDOM.render(<TaskApp/>, document.getElementById('root'));