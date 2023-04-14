import Comment from './Comment';

const CommentList = ({comments}: {comments: any}) => {
	console.log('comments ', comments);
	return (
		<div>
			{comments &&
				comments.map((comment: any) => (
					<div key={comment.id}>
						<Comment data={comment.snippet.topLevelComment.snippet} />
						{/* <div className='pl-4 border-l-black'>
							<CommentList comments={comment.replies} />
						</div> */}
					</div>
				))}
		</div>
	);
};

export default CommentList;
