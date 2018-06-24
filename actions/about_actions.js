import * as firebase from 'firebase';
import '@firebase/firestore';

import { GET_ABOUT } from './types';

export const getAboutDetails = dispatch => {
	return dispatch => {
		const firestore = firebase.firestore();
		const settings = { timestampsInSnapshots: true };
		firestore.settings(settings);
		const db = firebase.firestore();
		const aboutRef = db.collection('static').doc('about');
		const aboutDetails = aboutRef
			.get()
			.then(doc => {
				if (doc.exists) {
					dispatch({ type: GET_ABOUT, payload: doc.data() });
				} else {
					console.log('no such document');
				}
			})
			.catch(error => {
				console.log('Error getting document:', error);
			});
	};
};
