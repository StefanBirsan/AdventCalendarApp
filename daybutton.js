import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';

const set = async (value) => {
    try {
        const jsonValue = await AsyncStorage.getItem('advent_day')
        let output = jsonValue != null ? JSON.parse(jsonValue) : {};
        output[value] = value;
        await AsyncStorage.setItem('advent_day', JSON.stringify(output))


} catch(e)
{
    // error reading value
}
}


const YourComponent = ({ threshold, left, top, backgroundColor, text, lineColor }) => {
    const [today, setToday] = useState(new Date());
    const currentDay = today.getDate();

    const navigator = useNavigation();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setToday(new Date());
        }, 3600000); // Update every hour

        return () => clearInterval(intervalId);

    }, []);

    return (
        <TouchableOpacity
            onPress={() => {

                if (currentDay >= threshold) {
                    navigator.push("Ecransmek",{day: threshold})
                    set(threshold.toString());
                    Alert.alert(`${text}!`);
                } else {
                    Alert.alert(`Button disabled. Current day is not greater than the threshold: ${threshold}`);
                }
            }}
            disabled={false}
            style={[styles.button, { left, top, backgroundColor }]}
        >
            <View style={styles.presentBox}>
                <View style={[styles.presentLineVertical, { backgroundColor: lineColor }]} />
                <View style={[styles.presentLineHorizontal, { backgroundColor: lineColor }]} />
            </View>
            <Text style={styles.buttonText}>{`DAY`}</Text>
            <Text style={styles.dayText}>{`${threshold}`}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center', // Center the content horizontally and vertically
        borderRadius: 10,
    },
    presentBox: {
        position: 'relative',
        width: 40,
        height: 40,
    },
    presentLineVertical: {
        position: 'absolute',
        width: 10,
        height: 81,
        top: -21, // Start from the vertical start of the button
        left: 16, // Start from the horizontal start of the button
    },
    presentLineHorizontal: {
        position: 'absolute',
        width: 81,
        height: 10,
        top: 15, // Start from the vertical start of the button
        left: -21, // Start from the horizontal start of the button
    },
    buttonText: {
        color: 'white',
        position: 'absolute', // Make the text overlay the lines
        top: 20,
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    dayText: {
        color: 'white',
        position: 'absolute', // Make the text overlay the lines
        fontSize: 16,
        top: 40,
        fontWeight: 'bold',
    }
});

export default YourComponent;
