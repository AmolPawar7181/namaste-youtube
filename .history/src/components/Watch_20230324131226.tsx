import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {toggleMenu} from '../utils/appSlice';

const Watch = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(toggleMenu());
	}, []);

	return <div>Watch</div>;
};

export default Watch;
