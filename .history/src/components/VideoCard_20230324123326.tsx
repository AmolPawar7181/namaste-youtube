import React from 'react';
import {VideoCardType} from '../utils/types';
const VideoCard = ({info}: {info: VideoCardType}) => {
	console.log(info);
	// const {snippet, statistics} = info;
	return <div>{/* <img src={snippet.thumbnails.high.url} /> */} Video</div>;
};

export default VideoCard;
