import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {closemenu} from '../utils/appSlice';

const Watch = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closemenu());
	}, []);

	return <div>Watch</div>;
};

export default Watch;
