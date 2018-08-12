import * as firebase from 'firebase';
import '@firebase/firestore';
import _ from 'lodash';

import { GET_SCHEDULE } from './types';

export const getVaccinationSchedules = dispatch => {
    return dispatch => {
        let user = firebase.auth().currentUser;
        let uuid = user.uid;
        const db = firebase.firestore();
        const vaccRef = db.collection('schedules').doc(uuid);
        const scheduleDetails = vaccRef
            .get()
            .then(doc => {
                if (doc.exists) {
                    let data = doc.data();
                    let cData = _.map(_.toPairs(data), d => _.fromPairs([d]));
                    dispatch({ type: GET_SCHEDULE, payload: cData });
                } else {
                    console.log('no such document');
                }
            })
            .catch(error => {
                console.log('Error getting document:', error);
            });
    };
};
