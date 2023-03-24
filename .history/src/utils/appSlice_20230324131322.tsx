import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MenuState} from './types';

const initialState: MenuState = {
	isMenuOpen: true,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleMenu: (state) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
		closemenu: (state) => {
			state.isMenuOpen = false;
		},
	},
});

export const {toggleMenu, closemenu} = appSlice.actions;
export default appSlice.reducer;
