import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {KSpacer} from "./tabspacer";

const MoviesXmas = ({ movie_title, thumb_movie }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movie of the day:</Text>
            <KSpacer h={30} />
            <Image source={thumb_movie} style={styles.thumbnail} />
            <KSpacer h={10} />
            <Text style={styles.title}>{movie_title}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        borderColor: '#ddd',
        marginBottom: 10,
    },
    thumbnail: {
        width: 180,
        height: 300,
        borderRadius: 4,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default MoviesXmas;