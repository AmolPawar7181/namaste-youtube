import {useDispatch} from 'react-redux';
import {toggleMenu} from '../utils/appSlice';

const Watch = () => {
	const dispatch = useDispatch();
	dispatch(toggleMenu());
	return <div>Watch</div>;
};

export default Watch;
