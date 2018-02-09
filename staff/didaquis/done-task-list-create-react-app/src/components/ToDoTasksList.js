import React from 'react';

/*
class ToDoTasksList extends React.Component {

	_handlerOnClick = (e) => {
		e.preventDefault();

		//task que han seleccionado = e.target.id
		const itemSelected= (e.target.id);
		this.props.onSelectOneItem(itemSelected)
	}

	render(){
		{
			//console.table(this.props.tasksToDo);
		}

		return (
			<ul id="sortable" className="list-unstyled">
				{
					this.props.tasksToDo.map( (task) => {
						if(task.completedTask === false){
							return (
								<li className="ui-state-default" key={task.id}>
									<div className="checkbox">
										<label>
											<input 
												type="checkbox" 
												defaultValue 
												id={task.id} 
												onClick={this._handlerOnClick} 
												/>{task.textOfTask}
										</label>
									</div>
								</li>
							);
						}
					} )
				}
		  	</ul>
		);
	}
}
*/

function ToDoTasksList(props) {
	return (
		<ul id="sortable" className="list-unstyled">
			{
				props.tasksToDo.map( (task) => {
					if(task.completedTask === false){
						return (
							<li className="ui-state-default" key={task.id}>
								<div className="checkbox">
									<label>
										<input 
											type="checkbox" 
											
											defaultValue 

											id={task.id} 
											
											onClick={e => {
												//e.preventDefault()

												console.log('click')
											}}

											onChange={e => { 
												//e.preventDefault()
												
												console.log('change')

												const id = e.target.id
												// COOL! but...
												// const { target : {id }} = e
												
												setTimeout(() => props.onSelectOneItem(id), 500)
											}} 
											/>{task.textOfTask}
									</label>
								</div>
							</li>
						);
					}
				} )
			}
		</ul>
	);
}

export default ToDoTasksList;