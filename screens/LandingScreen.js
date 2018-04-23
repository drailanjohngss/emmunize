import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Content } from 'native-base';

class LandingScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Text>EMMUNIZE</Text>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default LandingScreen;
