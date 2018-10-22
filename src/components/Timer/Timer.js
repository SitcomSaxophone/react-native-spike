import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Timer extends Component {
    render() {
        return (
            <React.Fragment>
                <Text h2>
                    {this.props.onTime}
                </Text>
                <Text h2>
                    {this.props.restTime}
                </Text>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({

});

export default Timer;