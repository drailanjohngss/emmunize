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

class LandingScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Container>
					<Text style={styles.textStyle}>E-MMUNIZE APP</Text>
				</Container>
				<Container style={styles.container}>
					<Card style={{ width: '100%' }}>
						<CardItem>
							<Text> Email: </Text>
							<Input placeholder="juandelacruz@gmail.com" />
						</CardItem>
						<CardItem>
							<Text> Password: </Text>
							<Input placeholder="********" />
						</CardItem>
						<CardItem>
							<Button
								block
								full
								primary
								style={{ width: '100%' }}
								onPress={() => {
									Actions.home();
								}}
							>
								<Text>Sign In </Text>
							</Button>
						</CardItem>
						<CardItem>
							<Button
								transparent
								full
								primary
								style={{ width: '100%' }}
								onPress={() => {
									Actions.register();
								}}
							>
								<Text>Register </Text>
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
		fontSize: 40,
		paddingTop: 30
	}
});

export default LandingScreen;
