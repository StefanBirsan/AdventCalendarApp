import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DayWithLine = ({ children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{children}</Text>
            <View style={styles.line} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', // Text color
        backgroundColor: 'black', // Background color
        paddingVertical: 5, // Adjust padding as needed
        paddingHorizontal: 10, // Adjust padding as needed
        borderRadius: 5, // Adjust border radius as needed
        marginLeft: 10,
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: 'black',
        marginLeft: 10,
        marginRight: 50,
    },
});

export default DayWithLine;
