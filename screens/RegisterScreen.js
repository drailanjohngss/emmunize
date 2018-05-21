import React, { Component } from 'react';
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

	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<Form style={{}}>
						<Item stackedLabel>
							<Label>Name</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>Age</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>Address</Label>
							<Input />
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
									this.setState({ date: date });
								}}
							/>
						</Item>
						<Item stackedLabel>
							<Label>Mothers Name</Label>
							<Input />
						</Item>
						<Item stackedLabel>
							<Label>Fathers Name</Label>
							<Input />
						</Item>
						<Item stackedLabel last>
							<Label>Guardians Name</Label>
							<Input />
						</Item>

						<Button block full style={{ width: '100%' }}>
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

export default RegisterScreen;
