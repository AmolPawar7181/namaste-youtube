import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Outlet} from 'react-router-dom';
import {openMenu} from '../utils/appSlice';

import SideBar from './SideBar';

const Body = () => {
	return (
		<div className='flex'>
			<SideBar />
			<Outlet />
		</div>
	);
};

export default Body;
