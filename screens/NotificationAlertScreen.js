import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	Container,
	Text,
	Content,
	Card,
	CardItem,
	Input,
	Button
} from 'native-base';

class NotificationAlertScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Text>Notification Alert Screen</Text>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%'
	},
	textStyle: {
		fontSize: 50,
		paddingTop: 30
	}
});

export default NotificationAlertScreen;
