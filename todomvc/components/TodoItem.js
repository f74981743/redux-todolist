import React, { Component } from 'react';

export default class TodoItem extends Component {

	handleMark(id) {
		const { actions } = this.props;
		actions.markTodo(id);
	}

	render() {
		const { todo, handleMark } = this.props;

		return (
			<div>
				<input type="checkbox" ref="list" /*onChange={() => {handleMark()}}*/onChange={(e) => {this.handleMark(todo.id)}} checked={todo.marked ? "checked" : ""} /><label>{todo.text}</label>
			</div>
		)
	}

}