// YourComponent.js

import React, { useState } from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

const YourComponent = ({ threshold, left, top ,text}) => {
    const [today, setToday] = useState(new Date());
    const currentDay = today.getDate();

    return (
        <TouchableOpacity
            onPress={() => {
                if (currentDay > threshold) {
                    // Your button logic here
                    Alert.alert(`${text}!`);
                } else {
                    Alert.alert(`Button disabled. Current day is not greater than the threshold: ${threshold}`);
                }
            }}
            disabled={false}
            style={[styles.button, { left, top }]}
        >
            <Text style={styles.buttonText}>{`DAY ${threshold}`}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        padding: 20,
        backgroundColor: '#000000',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
    },
});

export default YourComponent;
