import React from 'react';

const Comment = ({data}: {data: any}) => {
	return <div>{data.name}</div>;
};

export default Comment;
