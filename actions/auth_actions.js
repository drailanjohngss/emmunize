import * as firebase from 'firebase';
import '@firebase/firestore';
import Moment from 'moment';
import { Alert } from 'react-native';

import {
	NAME_CHANGE,
	AGE_CHANGE,
	ADDRESS_CHANGE,
	BIRTHDAY_CHANGE,
	MOTHERS_NAME_CHANGE,
	FATHERS_NAME_CHANGE,
	GUARDIANS_NAME_CHANGE,
	EMAIL_CHANGE,
	PASSWORD_CHANGE,
	LOADING_STOP,
	LOADING_TRUE
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
		dispatch({ type: LOADING_TRUE });
		const firestore = firebase.firestore();
		const settings = { timestampsInSnapshots: true };
		firestore.settings(settings);
		const created_at = firebase.firestore.FieldValue.serverTimestamp();
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(data => {
				const uid = data.user.uid;
				const db = firebase.firestore();
				const docRef = db.collection('users').doc(uid);
				const userDetails = docRef
					.set({
						name,
						age,
						address,
						birthday,
						mothersName,
						fathersName,
						guardiansName,
						created_at
					})
					.then(
						Alert.alert(
							'Success',
							'Account Created Succesfully',
							[
								{
									text: 'Continue',
									onPress: () => {
										dispatch({ type: LOADING_STOP });
									}
								}
							],
							{ cancelable: false }
						)
					);
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
