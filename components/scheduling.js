import * as firebase from 'firebase';
import '@firebase/firestore';
import Moment from 'moment';

export default class Scheduling {
    static createSchedule(birthday) {
        // get login user credentials
        let user = firebase.auth().currentUser;
        let uuid = user.uid;

        const db = firebase.firestore();
        // get vaccination list
        let newSchedArr = [];
        db
            .collection('vaccines')
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    let data = doc.data();
                    // get vaccine schedule
                    let vacSched = data.vac_schedule_day;
                    let vacName = data.vac_name;

                    // add the vacSched to the baby's birthday
                    let sched = Moment(birthday)
                        .add(vacSched, 'days')
                        .format('YYYY-MM-DD');

                    // Save the schedule dates of the baby's vaccination
                    db
                        .collection('schedules')
                        .doc(uuid)
                        .set(
                            {
                                [`${vacName}`]: sched
                            },
                            { merge: true }
                        )
                        .then(function() {
                            console.log('Document successfully written!');
                        })
                        .catch(function(error) {
                            console.error('Error writing document: ', error);
                        });
                });
            });
    }
}
