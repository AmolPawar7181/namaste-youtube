import React from 'react';
import {VideoCardType} from '../utils/types';
const VideoCard = ({info}: {info: VideoCardType}) => {
	const {snippet, statistics} = info;
	return (
		<div className='p-2 m-2 w-72 shadow-md rounded-lg'>
			<img src={snippet.thumbnails.medium.url} alt='Thumbnail' />
			<ul>
				<li className='font-bold py-2'>{snippet.title}</li>
				<li>{snippet.channelTitle}</li>
				<li>{statistics.viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;
