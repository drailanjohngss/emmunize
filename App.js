import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Router from './Router';
import Expo from 'expo';
import { StatusBar } from 'react-native';
import Config from './Config/firebase.js';
import * as firebase from 'firebase';
import '@firebase/firestore';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import store from './store';
import reducers from './reducers';

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
    }

    componentDidMount() {
        const firebase = require('firebase');
        firebase.initializeApp(Config.Firebase);
        const firestore = firebase.firestore();
        const settings = { timestampsInSnapshots: true };
        firestore.settings(settings);
    }

    render() {
        if (this.state.loading) {
            return <Expo.AppLoading />;
        }
        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk, logger)
        );
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
