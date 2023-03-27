import Comment from './Comment';

const CommentList = ({comments}: {comments: any}) => {
	return (
		<div>
			{comments.map((comment: any) => (
				<Comment data={comment} />
			))}
		</div>
	);
};

export default CommentList;
