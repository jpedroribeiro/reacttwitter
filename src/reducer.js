import { ADD_TUITE } from './action-types';

// TODO this
// async function loadTweets() {
// 	let response = await fetch('http://localhost:5000/api');
// 	let data = await response.json();

// 	return data;
// }

// loadTweets().then(tweets => {});

const initialState = {
	tweets: [
		{
			id: 0,
			user: 'test',
			message: 'empty tweet',
			date: Date.now()
		},
		{
			id: 1,
			user: 'another test',
			message: 'another empty tweet',
			date: Date.now()
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
						id: state.tweets.length
					}
				]
			};
		default:
			return state;
	}
};

export default rootReducer;
