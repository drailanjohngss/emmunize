import {
	NAME_CHANGE,
	AGE_CHANGE,
	ADDRESS_CHANGE,
	BIRTHDAY_CHANGE,
	MOTHERS_NAME_CHANGE,
	FATHERS_NAME_CHANGE,
	GUARDIANS_NAME_CHANGE
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

export const mothersNameChange = text => {
	return {
		type: MOTHERS_NAME_CHANGE,
		payload: text
	};
};

export const fathersNameChange = text => {
	return {
		type: FATHERS_NAME_CHANGE,
		payload: text
	};
};

export const guardiansNameChange = text => {
	return {
		type: GUARDIANS_NAME_CHANGE,
		payload: text
	};
};
