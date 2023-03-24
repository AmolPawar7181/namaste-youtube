import {useEffect, useState} from 'react';
import {YOUTUBE_VIDEOS_API} from '../utils/Constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		const data = await fetch(YOUTUBE_VIDEOS_API);
		const json = await data.json();
		console.log('json ', json);
		setVideos(json.items);
	};

	return (
		<div>
			{videos && videos.length > 0 ? <VideoCard info={videos[0]} /> : null}
		</div>
	);
};

export default VideoContainer;
