import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface MenuState {
	isMenuOpen: boolean;
}
const initialState: MenuState = {
	isMenuOpen: true,
};

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		toggleMenu: (state, action: PayloadAction<boolean>) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
	},
});

export const {toggleMenu} = appSlice.actions;
export default appSlice.reducer;
