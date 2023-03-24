import {useEffect} from 'react';

const useDebounce = (text: string, time = 200, cb: Function) => {
	useEffect(() => {
		const timer = setTimeout(cb, time);

		return () => {
			clearTimeout(timer);
		};
	}, [text]);

	return;
};

export default useDebounce;
