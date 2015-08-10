import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class MainSection extends Component {
	 
	constructor(props, context) {
		super(props, context);

		this.state = {
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

	handleMark(id) {
		const { actions } = this.props;
		actions.markTodo(id);
	}


	render() {

		const { todos , actions } = this.props;
		return (
			<div className="MainSection">
				<input type='text' onKeyDown={e => {this.addTodo(e)}} />
				<input type='checkbox' onChange={e => {this.markAll(e)}}  checked={this.state.isCheckAllChecked ? "checked" : ""} />Check All
				<hr />
				{	todos.map( todo => 
						<TodoItem todo={todo} actions={actions} handleMark={() => {this.handleMark(todo.id)}} />
					)
				}
				<button onClick={() => {this.deleteTodo()}} >
					Delete Selected Item(s)
				</button>
			</div>
		);
	}
}