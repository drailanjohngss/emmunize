import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

class FlastListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const textColor = this.props.selected ? 'red' : 'black';
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View>
                    <Text style={{ color: textColor }}>
                        {this.props.vacName}
                    </Text>
                    <Text style={{ color: textColor }}>
                        {this.props.vacDate}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default FlastListItem;
