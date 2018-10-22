import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Header extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text h1>
                    Header
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#B4D455',

    }
})

export default Header;