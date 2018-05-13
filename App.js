import React from 'react';
import { Provider } from 'react-redux';
import Router from './Router';
import Expo from 'expo';
import { StatusBar } from 'react-native';
import Config from './Config/firebase.js';
import * as Firebase from 'firebase';
import '@firebase/firestore';

import store from './store';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loading: true };
	}
	async componentWillMount() {
		await Expo.Font.loadAsync({
			Roboto: require('native-base/Fonts/Roboto.ttf'),
			Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
			Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf')
		});
		this.setState({ loading: false });
		const firebase = require('firebase');
		firebase.initializeApp(Config.Firebase);
	}

	render() {
		if (this.state.loading) {
			return <Expo.AppLoading />;
		}
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}
