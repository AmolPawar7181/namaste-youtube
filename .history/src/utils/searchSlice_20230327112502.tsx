import {createSlice} from '@reduxjs/toolkit';

const searchSlide = createSlice({
	name: 'search',
	initialState: {},
	reducers: {
		cacheResults: (state, action) => {
			state = {...action.payload, ...state};
		},
	},
});

export const {cacheResults} = searchSlide.actions;
export default searchSlide.reducer;
