import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
	Container,
	Text,
	Content,
	Card,
	CardItem,
	Input,
	Button,
	Icon,
	Grid,
	Row,
	Col
} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Text style={styles.title}>E-mmunize App</Text>
				<Row>
					<Col style={styles.colStyle}>
						<TouchableOpacity
							onPress={() => {
								Actions.profile();
							}}
						>
							<Entypo size={80} name="v-card" />
						</TouchableOpacity>
						<Text>Profile</Text>
					</Col>
					<Col style={styles.colStyle}>
						<TouchableOpacity
							onPress={() => {
								Actions.immunization();
							}}
						>
							<Icon style={{ fontSize: 80 }} name="ios-medkit" />
						</TouchableOpacity>
						<Text>Immunization</Text>
					</Col>
				</Row>
				<Row>
					<Col style={styles.colStyle}>
						<TouchableOpacity
							onPress={() => {
								Actions.vaccination();
							}}
						>
							<MaterialCommunityIcons size={80} name="calendar-clock" />
						</TouchableOpacity>
						<Text>Vaccination Schedule</Text>
					</Col>
					<Col style={styles.colStyle}>
						<TouchableOpacity
							onPress={() => {
								Actions.notificationalert();
							}}
						>
							<Octicons size={80} name="megaphone" />
						</TouchableOpacity>
						<Text>Notification Alert</Text>
					</Col>
				</Row>
				<Row>
					<Col style={styles.colStyle}>
						<TouchableOpacity
							transparent
							onPress={() => {
								Actions.about();
							}}
						>
							<Entypo size={80} name="help-with-circle" />
						</TouchableOpacity>
						<Text>Help</Text>
					</Col>
					<Col style={styles.colStyle}>
						<TouchableOpacity
							transparent
							onPress={() => {
								Actions.healthcareprovider();
							}}
						>
							<FontAwesome size={80} name="user-md" />
						</TouchableOpacity>
						<Text>Healthcare Provider</Text>
					</Col>
				</Row>
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
	},
	title: {
		alignItems: 'center',
		marginTop: 100
	},
	colStyle: {
		alignSelf: 'center',
		alignItems: 'center'
	}
});

export default HomeScreen;
