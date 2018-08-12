import * as firebase from 'firebase';
import '@firebase/firestore';
import Moment from 'moment';

export default class Scheduling {
    static createSchedule(birthday) {
        let user = firebase.auth().currentUser;
        let uuid = user.uid;
        console.log(uuid);
        const db = firebase.firestore();
        // get vaccination list

        db
            .collection('vaccines')
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, ' => ', doc.data());
                    let data = doc.data();
                    let vacSched = data.vac_schedule_day;
                    let vacName = data.vac_name;

                    console.log(vacName, '=>', vacSched);

                    // add the vacSched to the baby's birthday
                    let sched = Moment(birthday)
                        .add(vacSched, 'days')
                        .format('YYYY-MM-DD');
                    console.log(sched);
                });
            });
    }
}
