import * as firebase from 'firebase';
import '@firebase/firestore';
import Moment from 'moment';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Scheduling from '../components/scheduling';

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

export const emailLogin = ({ emailValue, passwordValue }) => {
    return dispatch => {
        firebase
            .auth()
            .signInWithEmailAndPassword(emailValue, passwordValue)
            .then(user => {
                const currentUser = firebase.auth().currentUser;
                Actions.home();
            })
            .catch(error => {
                console.log(error);
            });
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
                        email,
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
                                        // function for creating vaccination schedule
                                        Scheduling.createSchedule(birthday);
                                        Actions.home();
                                        dispatch({ type: LOADING_STOP });
                                    }
                                }
                            ]
                            // { cancelable: false }
                        )
                    )
                    .catch(error => {
                        Alert.alert('Account Creation Failed', error);
                        dispatch({ type: LOADING_STOP });
                    });
            })
            .catch(error => {
                // Handle Errors here.
                // ...
                console.log(error);
                dispatch({ type: LOADING_STOP });
            });
    };
};

function createSchedule(date) {
    console.log(date);
}

export const onSignOut = () => async dispatch => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('You have log-out succesfully');
            Actions.landing();
        })
        .catch(() => {
            Actions.landing();
        });
};
