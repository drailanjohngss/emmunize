import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
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
import * as firebase from 'firebase';
import '@firebase/firestore';

class LandingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailValue: ''
        };
    }

    componentWillUnmount() {
        if (this.unsubscriber) {
            this.unsubscriber();
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user != null) {
                console.log('We are authenticated now!');
            } else {
                console.log('No logged in user');
            }
        });
    }

    onEmailChanged(e) {
        this.setState({
            emailValue: e
        });
    }

    onPasswordChaged(p) {
        this.setState({
            passwordValue: p
        });
    }

    onButtonPress() {
        const emailValue = this.state.emailValue;
        const passwordValue = this.state.passwordValue;
        this.props.emailLogin({ emailValue, passwordValue });
    }

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
                            <Input
                                onChangeText={e => this.onEmailChanged(e)}
                                placeholder="juandelacruz@gmail.com"
                                value={this.state.emailValue}
                            />
                        </CardItem>
                        <CardItem>
                            <Text> Password: </Text>
                            <Input
                                onChangeText={p => this.onPasswordChaged(p)}
                                secureTextEntry
                                placeholder="********"
                                value={this.state.passwordValue}
                            />
                        </CardItem>
                        <CardItem>
                            <Button
                                block
                                full
                                primary
                                style={{ width: '100%' }}
                                onPress={() => {
                                    this.onButtonPress();
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

export default connect(null, actions)(LandingScreen);
