import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Ecransmek = ({ navigation, route }) => {
    return (
        <ImageBackground
            source={require('./assets/backSmek.png')}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={styles.dayText}>{route.params.day}</Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.replace("Advent Calendar")}
                >
                    <Text style={styles.buttonText}>Replace</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.resetButton]}
                    onPress={() => AsyncStorage.clear()}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dayText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: '#e74c3c', // Different color for reset button
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Ecransmek;
