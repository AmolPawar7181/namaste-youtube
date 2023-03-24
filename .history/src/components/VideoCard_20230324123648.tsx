import React from 'react';
import {VideoCardType} from '../utils/types';
const VideoCard = ({info}: {info: VideoCardType}) => {
	const {snippet, statistics} = info;
	console.log(snippet, statistics);
	return (
		<div>
			<img src={snippet.thumbnails.medium.url} alt='Thumbnail' />
		</div>
	);
};

export default VideoCard;
