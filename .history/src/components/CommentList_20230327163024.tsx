import Comment from './Comment';

const CommentList = ({comments}: {comments: any}) => {
	return (
		<div>
			{comments.map((comment: any, index: number) => (
				<div key={index}>
					<Comment data={comment} />
					<div className='pl-4'>
						<CommentList comments={comment.replies} />
					</div>
				</div>
			))}
		</div>
	);
};

export default CommentList;
