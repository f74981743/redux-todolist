import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class MainSection extends Component {
	 
	constructor(props, context) {
		super(props, context);

		this.state = {
			//todos: this.props.todos,
			isCheckAllChecked: false,
			isDeleteButtonShow: false
		};
	}

	addTodo(e) {
		const { actions } = this.props;
		var text = e.target.value.trim();

		if (e.target.value.length !== 0 && e.which === 13) {
			actions.addTodo(text);
			e.target.value = '';
			this.setState({
				isCheckAllChecked: false
			});
		}
	}

	deleteTodo() {
		const { todos, actions } = this.props;
		todos.map(
			todo => {
				if (todo.marked) {
					actions.deleteTodo(todo.id);
				}
			}
		);
		this.setState({
			isCheckAllChecked: false
		});

	}

	markAll(e) {
		const { actions } = this.props;
		actions.markAll();

		if (!e.target.checked) {
			this.setState({
				isCheckAllChecked: false
			});
		} else {
			this.setState({
				isCheckAllChecked: true
			});
		}
	}

	/*handleMark(id) {
		const { actions } = this.props;
		actions.markTodo(id);
	}*/

	render() {

		const { todos , actions } = this.props;
		const markedCount = todos.reduce((count, todo) =>
	      todo.marked ? count + 1 : count,
	      0
	    );
		return (
			<div className="MainSection">
				<input type='text' checked={markedCount === todos.length} onKeyDown={e => {this.addTodo(e)}} />
				{this.renderMarkAll(markedCount)}
				
				<hr />
				{	todos.map( todo => 
						<TodoItem todo={todo} actions={actions} handleMark={() => {this.handleMark(todo.id)}} />
					)
				}
				<button onClick={() => {this.deleteTodo()}} style={ markedCount > 0 ? { display: 'block' } : { display: 'none' } } >
					Delete Selected Item(s)
				</button>
			</div>
		);
	}

	renderMarkAll(markedCount) {
		const { todos, actions } = this.props;
		if (todos.length > 0) {
			return (
				<div>
					<input type='checkbox' onChange={e => {this.markAll(e)}}  checked={markedCount === todos.length} /><label>Check All</label>
				</div>
			);
		}
	}
}