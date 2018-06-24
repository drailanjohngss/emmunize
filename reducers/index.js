import { combineReducers } from 'redux';
import auth from './auth_reducer';
import about from './about_reducer';

export default combineReducers({
	auth,
	about
});
