import { ADD_TUITE } from 'action-types';

export const addTuite = (id, user, message, date) => ({
	type: ADD_TUITE,
	payload: {
		id,
		user,
		message,
		date
	}
});
