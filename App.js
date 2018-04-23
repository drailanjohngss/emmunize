import React from 'react';
import { Provider } from 'react-redux';
import Router from './Router';

import store from './store';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}
