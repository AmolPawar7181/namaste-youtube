import {useEffect} from 'react';

const useDebounce = (time = 200, cb: Function) => {
	useEffect(() => {
		const timer = setTimeout(cb, time);

		return () => {
			clearTimeout(timer);
		};
	}, [cb]);

	return;
};

export default useDebounce;
