const Shimmer = () => {
	return (
		<div className='bg-gray-300 shadow-md rounded-2xl w-72 m-4 h-min '>
			<div className='shimmerBG media'></div>
			<div className='p-32'>
				<div className='shimmerBG title-line'></div>
				<div className='shimmerBG title-line end'></div>

				<div className='shimmerBG content-line m-t-24'></div>
				<div className='shimmerBG content-line'></div>
				<div className='shimmerBG content-line'></div>
				<div className='shimmerBG content-line'></div>
				<div className='shimmerBG content-line end'></div>
			</div>
		</div>
	);
};

export default Shimmer;
