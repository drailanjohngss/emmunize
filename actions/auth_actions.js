import * as firebase from 'firebase';
import '@firebase/firestore';
import Moment from 'moment';

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

export const emailChange = text => {
	return {
		type: EMAIL_CHANGE,
		payload: text
	};
};
export const passwordChange = text => {
	return {
		type: PASSWORD_CHANGE,
		payload: text
	};
};

export const saveUserDetails = ({
	name,
	age,
	address,
	birthday,
	mothersName,
	fathersName,
	guardiansName,
	email,
	password
}) => {
	return dispatch => {
		const dateCreated = Moment()
			.format('YYYY-MM-DD hh:mm:ss')
			.toString();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(user => {
				console.log(user);
			})
			.catch(function(error) {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
				// ...
			});
	};
};
