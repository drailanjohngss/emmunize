import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FlastListItem from '../components/FlatListItem';
import {
    Container,
    Text,
    Content,
    Card,
    CardItem,
    Input,
    Button
} from 'native-base';
import _ from 'lodash';

class VaccinationScheduleScreen extends React.PureComponent {
    componentDidMount() {
        // call function to get vaccination schedule
        this.props.getVaccinationSchedules();
    }

    state = { selected: (new Map(): Map<string, boolean>) };

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState(state => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return { selected };
        });
    };

    _renderItem = ({ item }) => (
        <FlastListItem
            id={item[0]}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            vacName={_.keys(item)}
            vacDate={_.map(item)}
        />
    );

    render() {
        const schedule = this.props.schedules;
        return (
            <Container style={styles.container}>
                <FlatList
                    data={schedule}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
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
        schedules: state.schedule.schedule
    };
};

export default connect(mapStateToProps, actions)(VaccinationScheduleScreen);
