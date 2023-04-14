import {useEffect, useState} from 'react';
import {YOUTUBE_VIDEOS_API} from '../utils/Constants';
import {VideoCardType} from '../utils/types';
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {openMenu} from '../utils/appSlice';
import Shimmer from './Shimmer';

const VideoContainer = () => {
	const dispatch = useDispatch();
	const [videos, setVideos] = useState([]);
	const youtubeApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

	useEffect(() => {
		getVideos();
		dispatch(openMenu());
	}, []);

	const getVideos = async () => {
		const data = await fetch(`${YOUTUBE_VIDEOS_API}${youtubeApiKey}`);
		const json = await data.json();
		setVideos(json.items);
	};

	return (
		<div className='flex flex-wrap justify-center'>
			{videos && videos.length > 0 ? (
				videos.map((video: VideoCardType) => (
					<Link to={'/watch?v=' + video.id} key={video.id}>
						<VideoCard info={video} />
					</Link>
				))
			) : (
				<>
					{[...Array(10).keys()].map((a, i) => (
						<Shimmer key={i} />
					))}
				</>
			)}
		</div>
	);
};

export default VideoContainer;
