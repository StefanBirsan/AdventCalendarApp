// YoutubeEmbed.js
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import YouTube from "react-native-youtube-iframe";

const YoutubeEmbed = ({ embedId, titl }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{titl}</Text>
            <View style={styles.videoContainer}>
                <YouTube
                    videoId={embedId}
                    height={200}
                    width={300}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        color: 'black',
    },
    videoContainer: {
        overflow: 'hidden',
        borderRadius: 30,
    },
});

export default YoutubeEmbed;
