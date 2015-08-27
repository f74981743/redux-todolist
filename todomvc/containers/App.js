import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import TodoApp from './TodoApp';

const store = createStore(rootReducer);

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				{() => <TodoApp />}
			</Provider>
		);
	}
}