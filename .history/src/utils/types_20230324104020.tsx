export interface MenuState {
	value: boolean;
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
