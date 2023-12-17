import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import YoutubeEmbed from "./youtubeVid";
import DayWithLine from "./title";
import {listaids} from "./listaids";
import {KSpacer} from "./tabspacer";
import MoviesXmas from "./movies";
import {movielist} from "./movielist";
import RecipePage from "./recipe";

const Ecransmek = ({ navigation, route }) => {

    // Check if route and route.params are defined
    const day = route && route.params ? route.params.day : null;

    return (
        <ImageBackground

            source={require('./assets/backSmek.png')}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.content}>

                <KSpacer h={20} />

                {/* Check if day is defined before using it */}
                {day !== null && (

                    <DayWithLine style={styles.dayText}>Day {route.params.day}</DayWithLine>

                )}
                <KSpacer h={30} />

                <YoutubeEmbed

                    titl={listaids[route.params.day - 1].title}
                    embedId={listaids[route.params.day - 1].ytid} />

                <KSpacer h={5} />

                <RecipePage overlayText={listaids[route.params.day - 1].ingredients} />

                <KSpacer h={50} />

                <MoviesXmas

                    thumb_movie={movielist[route.params.day - 1].thumb_movie}
                    movie_title={movielist[route.params.day - 1].movie_title}
                />

                <KSpacer h={50} />

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


            </ScrollView>
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
        alignItems: 'center',
    },
    dayText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
        textAlign: 'center', // Center the text horizontally
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: '#e74c3c',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Ecransmek;
