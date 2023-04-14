import React from 'react';
import {VideoCardType} from '../utils/types';
const VideoCard = ({info}: {info: VideoCardType}) => {
	const {snippet, statistics} = info;
	return (
		<div className='m-2 w-80 shadow-md rounded-lg'>
			<img
				className='w-full rounded-t-lg'
				src={snippet.thumbnails.medium.url}
				alt='Thumbnail'
			/>
			<ul className='p-2'>
				<li className='font-bold py-2'>{snippet.title}</li>
				<li>{snippet.channelTitle}</li>
				<li>{statistics.viewCount} views</li>
			</ul>
		</div>
	);
};

export default VideoCard;
