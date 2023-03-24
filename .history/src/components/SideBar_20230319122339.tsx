import React from 'react';

const SideBar = () => {
	return (
		<div className='p-5 shadow-lg w-48'>
			<h1 className='font-bold'>Subscriptions</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>movies</li>
			</ul>
			<h1 className='font-bold pt-5'>Watch Later</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Gaming</li>
				<li>movies</li>
			</ul>
		</div>
	);
};

export default SideBar;
