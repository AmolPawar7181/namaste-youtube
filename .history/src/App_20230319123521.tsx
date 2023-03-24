import {Provider} from 'react-redux';
import Body from './components/Body';
import Head from './components/Head';
import './index.css';
import store from './utils/store';

function App() {
	return (
		<Provider store={store}>
			<Head />
			<Body />
		</Provider>
	);
}

export default App;
