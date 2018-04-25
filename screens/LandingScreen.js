import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
	Container,
	Text,
	Content,
	Card,
	CardItem,
	Input,
	Button
} from 'native-base';

class LandingScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Container>
					<Text style={styles.textStyle}>EMMUNIZE</Text>
				</Container>
				<Container style={styles.container}>
					<Card style={{ width: '100%' }}>
						<CardItem>
							<Text> Username: </Text>
							<Input placeholder="input username" />
						</CardItem>
						<CardItem>
							<Text> Password: </Text>
							<Input placeholder="********" />
						</CardItem>
						<CardItem>
							<Button block full primary style={{ width: '100%' }}>
								<Text>Sign In </Text>{' '}
							</Button>
						</CardItem>
						<CardItem>
							<Button transparent block full primary style={{ width: '100%' }}>
								<Text>Register </Text>{' '}
							</Button>
						</CardItem>
					</Card>
				</Container>
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

export default LandingScreen;
