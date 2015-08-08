import React, { Component } from 'react';

export default class TodoItem extends Component {

	handleMark(id) {
		const { actions } = this.props;
		actions.markTodo(id);
	}

	render() {
		const { todo } = this.props;

		return (
			<div>
				<input type="checkbox" onChange={() => {this.handleMark(todo.id)}} checked={todo.marked ? "checked" : ""} />{todo.text}
			</div>
		)
	}

}