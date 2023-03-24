import React from 'react';
import {VideoCardType} from '../utils/types';
const VideoCard = ({info}: {info: VideoCardType}) => {
	const {snippet, statistics} = info;
	return (
		<div>
			<img src={snippet.thumbnails.high.url} />
		</div>
	);
};

export default VideoCard;
