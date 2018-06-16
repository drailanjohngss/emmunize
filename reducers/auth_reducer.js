import {
	NAME_CHANGE,
	AGE_CHANGE,
	ADDRESS_CHANGE,
	BIRTHDAY_CHANGE,
	MOTHERS_NAME_CHANGE,
	FATHERS_NAME_CHANGE,
	GUARDIANS_NAME_CHANGE,
	EMAIL_CHANGE,
	PASSWORD_CHANGE
} from '../actions/types';

const INITIAL_STATE = {
	name: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case EMAIL_CHANGE:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGE:
			return { ...state, password: action.payload };
		case NAME_CHANGE:
			return { ...state, name: action.payload };
		case AGE_CHANGE:
			return { ...state, age: action.payload };
		case ADDRESS_CHANGE:
			return { ...state, address: action.payload };
		case BIRTHDAY_CHANGE:
			return { ...state, birthday: action.payload };
		case MOTHERS_NAME_CHANGE:
			return { ...state, mothersName: action.payload };
		case FATHERS_NAME_CHANGE:
			return { ...state, fathersName: action.payload };
		case GUARDIANS_NAME_CHANGE:
			return { ...state, guardiansName: action.payload };
		default:
			return state;
	}
}
