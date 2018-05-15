import { ADD_TUITE } from 'action-types';

const initialState = {
	tweets: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TUITE:
			return { ...state, tweets: [...state.tweets, action.payload] };
		default:
			return state;
	}
};

export default rootReducer;
