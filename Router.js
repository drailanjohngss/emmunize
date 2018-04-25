import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LandingScreen from './screens/LandingScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

const RouterComponent = () => {
	//check react-native-router-flux documentations
	// this is where we will put the routes
	return (
		<Router>
			<Scene key="root">
				<Scene key="landing" initial component={LandingScreen} />
				<Scene key="register" component={RegisterScreen} />
				<Scene key="home" hideNavBar={true} component={HomeScreen} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
