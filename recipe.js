import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RecipePage = ({ overlayText }) => {
    if (!overlayText || typeof overlayText !== 'string') {
        return null; // or some fallback UI for invalid overlayText
    }

    return (
        <View style={styles.container}>
            <Image source={require("./assets/recipenote.png")} style={styles.image} />

            <Text style={styles.ingred}>Ingredients:</Text>
            <Text style={styles.overlayText}>{overlayText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay color and opacity
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute',
        top: 30 , // Adjust the top position as needed
        textAlign: 'center', // Center the text horizontally
        left: -50,
    },
    ingred: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold',
        position: 'absolute',
        top: 8, // Adjust the top position as needed
        textAlign: 'center', // Center the text horizontally
        left: 20,
    },
});

export default RecipePage;