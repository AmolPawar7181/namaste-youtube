import CommentList from './CommentList';

const commentsData = [
	{
		name: 'Amol Pawar',
		text: 'Lorem ipsum',
		replies: [],
	},
	{
		name: 'Amol Pawar 1',
		text: 'Lorem ipsum 1',
		replies: [
			{
				name: 'Amol Pawar',
				text: 'Lorem ipsum 1-1',
				replies: [],
			},
		],
	},
	{
		name: 'Amol Pawar 2',
		text: 'Lorem ipsum 2',
		replies: [],
	},
	{
		name: 'Amol Pawar 3',
		text: 'Lorem ipsum 3',
		replies: [],
	},
	{
		name: 'Amol Pawar 4',
		text: 'Lorem ipsum 4',
		replies: [
			{
				name: 'Amol Pawar 4-1',
				text: 'Lorem ipsum 4-1',
				replies: [
					{
						name: 'Amol Pawar 4-1-1',
						text: 'Lorem ipsum 4-1-1',
						replies: [],
					},
					{
						name: 'Amol Pawar 4-1-2',
						text: 'Lorem ipsum 4-1-2',
						replies: [],
					},
				],
			},
		],
	},
];

const CommentsContainer = () => {
	return (
		<div className='m-5 p-2'>
			<h1 className='text-2xl font-bold'>Comments</h1>
			<CommentList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
