const Button = ({name}: {name: string}) => {
	return (
		<button className='px-2 py-2 mx-5 bg-gray-200 rounded-lg'>{name}</button>
	);
};

export default Button;
