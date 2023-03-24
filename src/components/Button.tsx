const Button = ({name}: {name: string}) => {
	return (
		<button className='px-5 py-2 mx-2 bg-gray-200 rounded-lg'>{name}</button>
	);
};

export default Button;
