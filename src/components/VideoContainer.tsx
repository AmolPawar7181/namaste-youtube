import {useEffect, useState} from 'react';
import {YOUTUBE_VIDEOS_API} from '../utils/Constants';
import {VideoCardType} from '../utils/types';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {openMenu} from '../utils/appSlice';

const VideoContainer = () => {
	const dispatch = useDispatch();
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
		dispatch(openMenu());
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEOS_API);
		const json = await data.json();
		console.log('json ', json);
		setVideos(json.items);
	};

	return (
		<div className='flex flex-wrap justify-center'>
			{videos && videos.length > 0
				? videos.map((video: VideoCardType) => (
						<Link to={'/watch?v=' + video.id} key={video.id}>
							<VideoCard info={video} />
						</Link>
				  ))
				: null}
		</div>
	);
};

export default VideoContainer;
