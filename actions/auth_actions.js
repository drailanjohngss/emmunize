import {
	NAME_CHANGE,
	AGE_CHANGE,
	ADDRESS_CHANGE,
	BIRTHDAY_CHANGE
} from './types';

export const nameChanged = text => {
	return {
		type: NAME_CHANGE,
		payload: text
	};
};

export const ageChanged = text => {
	return {
		type: AGE_CHANGE,
		payload: text
	};
};

export const addressChange = text => {
	return {
		type: ADDRESS_CHANGE,
		payload: text
	};
};

export const birthdayChange = text => {
	return {
		type: BIRTHDAY_CHANGE,
		payload: text
	};
};
