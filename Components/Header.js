import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Header = ({opacity}) => {
    return (
        <View style={styles.headerMain}>
            <Text style={styles.headerText}>Header Section</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerMain: {
        height: 300,
        backgroundColor: 'red'
    }
})