import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import * as firebase from 'firebase';
import '@firebase/firestore';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import DatePicker from 'react-native-datepicker';
import {
	Container,
	Text,
	Content,
	Card,
	CardItem,
	Input,
	Button,
	Form,
	Item,
	Label
} from 'native-base';

class RegisterScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { date: '' };
	}
	/**
	 * redux name input handler
	 * check auth_actions.js
	 */
	onNameChange(text) {
		this.props.nameChanged(text);
	}

	/**
	 * redux age input handler
	 * check auth_actions.js
	 */
	onAgeChange(text) {
		this.props.ageChanged(text);
	}

	/**
	 * redux address input handler
	 * check auth_actions.js
	 */
	onAddressChange(text) {
		this.props.addressChange(text);
	}

	/**
	 * redux mothersName input handler
	 * check auth_actions.js
	 */
	onMothersNameChange(text) {
		this.props.mothersNameChange(text);
	}

	/**
	 * redux fathers Name input handler
	 * check auth_actions.js
	 */
	onFathersNameChange(text) {
		this.props.fathersNameChange(text);
	}

	/**
	 * redux GuardiansName input handler
	 * check auth_actions.js
	 */
	onGuardiansNameChange(text) {
		this.props.guardiansNameChange(text);
	}

	/**
	 * redux GuardiansName input handler
	 * check auth_actions.js
	 */
	onEmailChange(text) {
		this.props.emailChange(text);
	}
	/**
	 * redux GuardiansName input handler
	 * check auth_actions.js
	 */
	onPasswordChange(text) {
		this.props.passwordChange(text);
	}

	/**
	 * redux save registration details
	 * Function to give the input values to redux
	 */
	onRegisterPress() {
		const {
			name,
			age,
			address,
			birthday,
			mothersName,
			fathersName,
			guardiansName,
			email,
			password
		} = this.props;
		this.props.saveUserDetails({
			name,
			age,
			address,
			birthday,
			mothersName,
			fathersName,
			guardiansName,
			email,
			password
		});
	}

	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<Form style={{}}>
						<Item stackedLabel>
							<Label>Email</Label>
							<Input onChangeText={this.onEmailChange.bind(this)} />
						</Item>
						<Item stackedLabel>
							<Label>Password</Label>
							<Input onChangeText={this.onPasswordChange.bind(this)} />
						</Item>
						<Item stackedLabel>
							<Label>Name</Label>
							<Input onChangeText={this.onNameChange.bind(this)} />
						</Item>
						<Item stackedLabel>
							<Label>Age</Label>
							<Input onChangeText={this.onAgeChange.bind(this)} />
						</Item>
						<Item stackedLabel>
							<Label>Address</Label>
							<Input onChangeText={this.onAddressChange.bind(this)} />
						</Item>
						<Item stackedLabel style={{ height: 90 }}>
							<Label>Birthday</Label>
							<DatePicker
								style={{ width: '100%', paddingTop: 10 }}
								date={this.state.date}
								mode="date"
								placeholder="select date"
								format="YYYY-MM-DD"
								confirmBtnText="Confirm"
								cancelBtnText="Cancel"
								customStyles={{
									dateIcon: {
										position: 'absolute',
										left: 0,
										top: 4,
										marginLeft: 0
									},
									dateInput: {
										marginLeft: 36
									}
									// ... You can check the source to find the other keys.
								}}
								onDateChange={date => {
									this.setState({ date });
									this.props.birthdayChange(date);
								}}
							/>
						</Item>
						<Item stackedLabel>
							<Label>Mothers Name</Label>
							<Input onChangeText={this.onMothersNameChange.bind(this)} />
						</Item>
						<Item stackedLabel>
							<Label>Fathers Name</Label>
							<Input onChangeText={this.onFathersNameChange.bind(this)} />
						</Item>
						<Item stackedLabel last>
							<Label>Guardians Name</Label>
							<Input onChangeText={this.onGuardiansNameChange.bind(this)} />
						</Item>

						<Button
							block
							full
							style={{ width: '100%' }}
							onPress={() => {
								this.onRegisterPress();
							}}
						>
							<Text>Register</Text>
						</Button>
						<Input />
					</Form>
				</Content>
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

const mapStateToProps = state => {
	return {
		email: state.auth.email,
		password: state.auth.password,
		name: state.auth.name,
		age: state.auth.age,
		address: state.auth.address,
		birthday: state.auth.birthday,
		mothersName: state.auth.mothersName,
		fathersName: state.auth.fathersName,
		guardiansName: state.auth.guardiansName
	};
};

export default connect(mapStateToProps, actions)(RegisterScreen);
