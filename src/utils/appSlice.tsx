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
		closeMenu: (state) => {
			state.isMenuOpen = false;
		},
		openMenu: (state) => {
			state.isMenuOpen = true;
		},
	},
});

export const {toggleMenu, closeMenu, openMenu} = appSlice.actions;
export default appSlice.reducer;
