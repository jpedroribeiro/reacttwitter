import { ADD_TUITE } from './action-types';

const initialState = {
	tweets: [
		{
			id: 2,
			user: 'jpedroribeiro',
			message: 'this is a hardcoded tweet from reducer',
			date: new Date('10/03/2018 13:45:59')
		},
		{
			id: 3,
			user: 'jpedroribeiro',
			message: 'this is another hardcoded tweet from reducer',
			date: new Date('15/03/2018 14:09:11')
		}
	]
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TUITE:
			return {
				...state,
				tweets: [
					...state.tweets,
					{
						...action.payload,
						id:
							action.payload.id !== undefined
								? action.payload.id
								: state.tweets.length
					}
				]
			};
		default:
			return state;
	}
};

export default rootReducer;
