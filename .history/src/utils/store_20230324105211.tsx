import {configureStore} from '@reduxjs/toolkit';
import appSlice from './appSlice';
import {RootState} from './types';

const store = configureStore({
	reducer: {
		app: appSlice,
	},
});

export default store;
