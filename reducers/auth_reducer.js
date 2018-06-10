import {
	NAME_CHANGE,
	AGE_CHANGE,
	ADDRESS_CHANGE,
	BIRTHDAY_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
	name: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case NAME_CHANGE:
			return { ...state, name: action.payload };
		case AGE_CHANGE:
			return { ...state, age: action.payload };
		case ADDRESS_CHANGE:
			return { ...state, address: action.payload };
		case BIRTHDAY_CHANGE:
			return { ...state, birthday: action.payload };
		default:
			return state;
	}
}
