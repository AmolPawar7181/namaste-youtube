import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../utils/types';

const SideBar = () => {
	const isMenuOpen = useSelector((store: RootState) => store.app.isMenuOpen);
	if (!isMenuOpen) return null;
	return (
		<div className='p-5 shadow-lg w-48'>
			<ul>
				<li>Home</li>
				<li>Shorts</li>
				<li>Videos</li>
				<li>Live</li>
			</ul>
			<h1 className='font-bold pt-5'>Subscriptions</h1>
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