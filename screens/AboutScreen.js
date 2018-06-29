import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as firebase from 'firebase';
import '@firebase/firestore';
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
import content from '../Config/content';

class AboutScreen extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Text style={styles.aboutText}>
					{' '}
					{content.static.aboutScreen}{' '}
				</Text>
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
	aboutText: {
		margin: 50
	}
});

export default AboutScreen;
