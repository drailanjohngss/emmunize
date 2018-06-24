import { GET_ABOUT } from '../actions/types';

const INITIAL_STATE = {
	about: 'NULL'
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_ABOUT:
			return { ...state, about: action.payload };
		default:
			return state;
	}
}
