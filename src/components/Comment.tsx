const Comment = ({data}: {data: any}) => {
	const {authorDisplayName, authorProfileImageUrl, textOriginal} = data;
	return (
		<div className='p-2 m-2 bg-slate-100 rounded-lg flex'>
			<img
				className='h-8 justify-center flex self-center'
				alt='user'
				src={authorProfileImageUrl}
			/>
			<div className='flex flex-col pl-8'>
				<span className='text-sm font-bold'>{authorDisplayName}</span>
				<div>{textOriginal}</div>
			</div>
		</div>
	);
};

export default Comment;
