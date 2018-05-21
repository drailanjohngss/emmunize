import { NAME_CHANGE } from '../actions/types';

const INITIAL_STATE = {
	name: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case NAME_CHANGE:
			return { ...state, name: action.payload };

		default:
			return state;
	}
}
