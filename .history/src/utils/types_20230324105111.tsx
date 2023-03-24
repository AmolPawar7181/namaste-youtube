export interface MenuState {
	isMenuOpen: boolean;
}

export interface RootState {
	app: MenuState;
}

export interface IncrementAction {
	type: 'counter/increment';
	payload: number;
}

export interface DecrementAction {
	type: 'counter/decrement';
	payload: number;
}

export type CounterAction = IncrementAction | DecrementAction;
