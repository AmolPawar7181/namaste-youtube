import {useEffect, useState} from 'react';
import {YOUTUBE_COMMENTS_API} from '../utils/Constants';
import CommentList from './CommentList';
import Shimmer from './Shimmer';

const youtubeApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

const CommentsContainer = ({videoId}: {videoId: any}) => {
	const [commentsData, setCommentsData] = useState([]);

	useEffect(() => {
		getComments();
	}, []);

	const getComments = async () => {
		const data = await fetch(
			`${YOUTUBE_COMMENTS_API}&key=${youtubeApiKey}&videoId=${videoId}`
		);
		const json = await data.json();
		setCommentsData(json.items);
	};

	return (
		<div className='m-5 p-2'>
			<h1 className='text-2xl font-bold'>Comments</h1>
			{commentsData && commentsData.length > 0 ? (
				<CommentList comments={commentsData} />
			) : (
				<Shimmer />
			)}
		</div>
	);
};

export default CommentsContainer;
