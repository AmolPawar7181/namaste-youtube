import React from 'react';
import ButtonList from './ButtonLIst';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
	return (
		<div className='col-span-10'>
			<ButtonList />
			<VideoContainer />
		</div>
	);
};

export default MainContainer;
