import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {closeMenu} from '../utils/appSlice';

const Watch = () => {
	const [searchParams] = useSearchParams();
	console.log('searchParams ', searchParams.get('v'));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	});

	return <div>Watch</div>;
};

export default Watch;
