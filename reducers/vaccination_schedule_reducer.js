import { GET_SCHEDULE } from '../actions/types';

const INITIAL_STATE = {
    schedule: 'NULL'
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_SCHEDULE:
            return { ...state, schedule: action.payload };
        default:
            return state;
    }
}
