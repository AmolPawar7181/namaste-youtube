export interface MenuState {
	isMenuOpen: boolean;
}

export interface CacheOptions {
	[key: string]: Array<string>;
}
export interface CacheState {
	cache: {};
}

export interface RootState {
	app: MenuState;
	search: CacheState;
}

export interface ToggleMenuAction {
	type: 'counter/increment';
	payload: number;
}

export interface DecrementAction {
	type: 'counter/decrement';
	payload: number;
}

export interface VideoCardType {
	id: string;
	snippet: {
		channelTitle: string;
		title: string;
		thumbnails: {
			high: {
				url: string;
			};
			medium: {
				url: string;
			};
		};
	};
	statistics: {
		viewCount: string;
	};
}

export type CounterAction = ToggleMenuAction | DecrementAction;
