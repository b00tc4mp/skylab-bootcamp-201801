/* WARN! following code requires a correction:

<TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} onClickBin={this.addTaskToRemovedList}/>

NOTE removeTask and addTaskToRemovedList react to the same event and perform complementary actions: removing a task from tasks array, and putting that task in the removedTasks array. all this logic can be concentrated in one single handler (e.g. removeTask), and then prescind of addTaskToRemovedList (and consequently prescind of onClickBin prop in TaskList).
*/

'use strict';

class TaskApp extends React.Component {
   constructor() {
       super()

       this.state = {
           tasks: [],
           removedTasks: []
       }
   }

   addTask = task => {
       this.setState(prevState => {
           return {
               tasks: [...prevState.tasks, task]
           }
       })

   }

   addTaskToRemovedList = removedTask => {
       this.setState(prevState => {
           return {
               removedTasks: [...prevState.removedTasks, removedTask]
           }
       })

   }

   removeTask = index => {
       this.setState(prevState => {
           return {
               tasks: prevState.tasks.filter((task, _index)=>{
                   return index !== _index
               })
           }
       })
   }

   render() {
       console.log('render')
       
       return <div>
           <TaskInput onAddTask={this.addTask} />
           <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} onClickBin={this.addTaskToRemovedList}/>
           <RemovedTaskList removedTasks={this.state.removedTasks} />
       </div>

   }
}

class TaskInput extends React.Component {
   constructor() {
       super()

       this.state = {
           input:' '
       }
   }

   keepInput = e => this.setState ({ input: e.target.value })

   addTask = () => {
       this.props.onAddTask(this.state.input)

       this.setState({input: ''})
   }

   render() {
       return <form onSubmit = { e => {
           e.preventDefault()

           this.addTask()
       }
   }>
       <input type="text" className="round-blue-input" placeholder= "Input task" onChange={this.keepInput} value={this.state.input} />
       &nbsp;
       <button type="submit" className="round-red-button">Add</button>
       </form>
   }

}

function TaskList(props) {
   return <ul>
       {props.tasks.map((task,index)=> <li>{task} &nbsp; <a onClick={(e) => {
           e.preventDefault()

           props.onRemoveTask(index)
           props.onClickBin(task)
          
          
       }}>X</a></li>)}
       </ul>

}

function RemovedTaskList(props) {
   console.log(props)
   return <ul>
       {props.removedTasks.map((task)=> <li>{task} </li>)}
       </ul>

}

ReactDOM.render(<TaskApp />,
   document.getElementById('root'))