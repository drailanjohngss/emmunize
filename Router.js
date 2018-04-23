import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LandingScreen from './screens/LandingScreen';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key="root">
				<Scene key="landing" initial component={LandingScreen} />
			</Scene>
		</Router>
	);
};

export default RouterComponent;
