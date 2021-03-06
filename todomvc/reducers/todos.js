import { ADD_TODO, DELETE_TODO, MARK_TODO, MARK_ALL, UNMARK_ALL } from '../constants/ActionTypes';

const initialState = [
	{
		text: 'Use Redux',
		marked: false,
		id: 0
	}
];

export default function todos(state = initialState, action) {
	switch(action.type) {
		case ADD_TODO:
			return [
				{
					id: (state.length === 0) ? 0 : state[0].id + 1,
					marked: false,
					text: action.text
				},
				...state
			];
		case DELETE_TODO:
			return state.filter(todo => 
				todo.id !== action.id
			);
		
		case MARK_TODO:
			return state.map(todo =>
				todo.id === action.id ? { ...todo, marked: !todo.marked } : todo
			);

		case MARK_ALL:
			const areAllMarked = state.every(todo => todo.marked);
			return state.map(todo => (
				{
					...todo,
					marked: !areAllMarked
				}
			));

		default:
			return state;
	}
}