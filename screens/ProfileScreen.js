import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
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

class ProfileScreen extends Component {
    onSignOutPress() {
        this.props.onSignOut();
    }
    render() {
        return (
            <Container style={styles.container}>
                <Text>ProfileScreen</Text>
                <Button
                    full
                    transparent
                    info
                    onPress={this.onSignOutPress.bind(this)}
                >
                    <Text style={styles.textStyle}>SignOut</Text>
                </Button>
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

export default connect(null, actions)(ProfileScreen);
