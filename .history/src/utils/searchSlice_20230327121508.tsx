import {createSlice} from '@reduxjs/toolkit';

const searchSlide = createSlice({
	name: 'search',
	initialState: {},
	reducers: {
		cacheResults: (state, action) => {
			console.log('action.payload ', action.payload[''].length);
			//state = {...action.payload, ...state};
			if (action.payload !== ' ') state = Object.assign(state, action.payload);
		},
	},
});

export const {cacheResults} = searchSlide.actions;
export default searchSlide.reducer;
