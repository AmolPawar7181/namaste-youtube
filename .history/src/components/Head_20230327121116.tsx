import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import useDebounce from '../hooks/useDebounce';
import {toggleMenu} from '../utils/appSlice';
import {YOUTUBE_SEARCH_API} from '../utils/Constants';
import {cacheResults} from '../utils/searchSlice';
import {RootState} from '../utils/types';

const Head = () => {
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	const searchCache = useSelector((store: RootState) => store.search);
	//console.log('searchCache ', searchCache);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchSuggetions, setSearchSuggetions] = useState([]);
	const [showSuggetions, setShowSuggetions] = useState(false);
	const getSearchSuggetions = async () => {
		if (searchCache.cache) {
			console.log('if searchCache ', searchCache.cache[searchQuery]);
			return;
			//dispatch(cacheResults)
		}
		// if(searchCache[searchQuery]){

		// }
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSearchSuggetions(json[1]);
		dispatch(cacheResults({[searchQuery]: json[1]}));
	};

	useDebounce(searchQuery, 200, getSearchSuggetions);

	return (
		<div className='grid grid-flow-col p-2 m-2 shadow-lg'>
			<div className='flex col-span-1 cursor-pointer'>
				<img
					onClick={() => toggleMenuHandler()}
					className='h-8'
					src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII='
					alt='menu'
				/>
				<img
					className='h-10 mx-2'
					src='data:image/png;base64,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'
					alt='Youtube'
				/>
			</div>
			<div className='col-span-10 px-10'>
				<input
					className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full'
					type='text'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					onFocus={() => setShowSuggetions(true)}
					onBlur={() => setShowSuggetions(false)}
				/>
				<button className=' border border-gray-400 p-2 rounded-r-full bg-gray-100'>
					Search
				</button>
				{searchSuggetions && searchSuggetions.length > 0 && showSuggetions ? (
					<div className='absolute bg-white w-1/3 p-2'>
						<ul>
							{searchSuggetions.map((result, index) => (
								<li key={index}> {result}</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
			<div className='col-span-1'>
				<img
					className='h-8'
					alt='user'
					src='data:image/png;base64,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'
				/>
			</div>
		</div>
	);
};

export default Head;
