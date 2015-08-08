import React, { Component } from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';
import TodoApp from './TodoApp';

const redux = createRedux(stores);

export default class App extends Component {
	render() {
		return (
			<Provider redux={redux}>
				{() => <TodoApp />}
			</Provider>
		);
	}
}