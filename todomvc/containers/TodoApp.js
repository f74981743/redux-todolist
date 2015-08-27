import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class TodoApp extends Component {
	render() {
		const { todos, dispatch } = this.props;
		const actions = bindActionCreators(TodoActions, dispatch);

		return (
			<div>
				<MainSection todos={todos} actions={actions} />
			</div>
		);
	}
}

function select(state) {
	return {
		todos: state.todos
	};
}

export default connect(select)(TodoApp);
/*class TodoApp extends Component {
	render() {
		return (
			<Connector select={state => ({todos: state.todos})}>
				{this.renderChild}
			</Connector>
		);
	}

	renderChild({todos, dispatch}) {
		const actions = bindActionCreators(TodoActions, dispatch);

		return (
			<div>
				<MainSection todos={todos} actions={actions} />
			</div>
		);
	}

}*/