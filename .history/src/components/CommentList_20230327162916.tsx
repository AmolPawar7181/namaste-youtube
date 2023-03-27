import Comment from './Comment';

const CommentList = ({comments}: {comments: any}) => {
	return (
		<div>
			{comments.map((comment: any, index: number) => (
				<>
					<Comment key={index} data={comment} />
					<CommentList key={'co ' + index} comments={comment.replies} />
				</>
			))}
		</div>
	);
};

export default CommentList;
