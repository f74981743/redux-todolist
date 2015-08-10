import React, { Component } from 'react';

export default class TodoItem extends Component {

	render() {
		const { todo, handleMark } = this.props;

		return (
			<div>
				<input type="checkbox" onChange={() => {handleMark()}}/*onChange={(e) => {this.handleMark(todo.id)}}*/ checked={todo.marked ? "checked" : ""} /><label>{todo.text}</label>
			</div>
		)
	}

}