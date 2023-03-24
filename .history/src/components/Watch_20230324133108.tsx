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

	return (
		<div>
			<iframe
				width='560'
				height='315'
				src='https://www.youtube.com/embed/MlDTHzK1vKI'
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>
		</div>
	);
};

export default Watch;
