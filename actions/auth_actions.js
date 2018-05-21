import { NAME_CHANGE } from './types';

export const nameChanged = text => {
	return {
		type: NAME_CHANGE,
		payload: text
	};
};
