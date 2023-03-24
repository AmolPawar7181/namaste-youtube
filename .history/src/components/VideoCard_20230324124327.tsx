import React from 'react';
import {VideoCardType} from '../utils/types';
const VideoCard = ({info}: {info: VideoCardType}) => {
	const {snippet, statistics} = info;
	console.log(snippet, statistics);
	return (
		<div className='p-2 m-2 w-72'>
			<img src={snippet.thumbnails.medium.url} alt='Thumbnail' />
			<ul>
				<li>{snippet.title}</li>
				<li>{snippet.channelTitle}</li>
				<li>{statistics.viewCount}</li>
			</ul>
		</div>
	);
};

export default VideoCard;
