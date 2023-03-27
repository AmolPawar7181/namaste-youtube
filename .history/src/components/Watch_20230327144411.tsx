import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {closeMenu} from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';

const Watch = () => {
	const [searchParams] = useSearchParams();
	console.log('searchParams ', searchParams.get('v'));
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closeMenu());
	});

	return (
		<div className='px-5'>
			<iframe
				width='1200'
				height='500'
				src={'https://www.youtube.com/embed/' + searchParams.get('v')}
				title='YouTube video player'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>
			<CommentsContainer />
		</div>
	);
};

export default Watch;
