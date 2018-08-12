import { combineReducers } from 'redux';
import auth from './auth_reducer';
import about from './about_reducer';
import schedule from './vaccination_schedule_reducer';

export default combineReducers({
    auth,
    about,
    schedule
});
