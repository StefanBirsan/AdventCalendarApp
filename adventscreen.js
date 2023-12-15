// FirstScreen.js

import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import YourComponent from "./daybutton";

const AdventScreen = () => {
    return (
        <ImageBackground source={require('./assets/adventback.png')} style={styles.background}>
            <View style={styles.container}>
                <YourComponent threshold={1} left={20} top={-760} />
                <YourComponent threshold={2} left={120} top={-670} />
                <YourComponent threshold={3} left={210} top={-750} />
                <YourComponent threshold={4} left={310} top={-690} />
                <YourComponent threshold={5} left={5} top={-620} />
                <YourComponent threshold={6} left={120} top={-559} />
                <YourComponent threshold={7} left={290} top={-580} />
                <YourComponent threshold={8} left={20} top={-480} />
                <YourComponent threshold={9} left={120} top={-400} />
                <YourComponent threshold={10} left={210} top={-470} />
                <YourComponent threshold={11} left={310} top={-400} />
                <YourComponent threshold={12} left={5} top={-320} />
                <YourComponent threshold={13} left={140} top={-290} />
                <YourComponent threshold={14} left={290} top={-270} />
                <YourComponent threshold={15} left={20} top={-190} />
                <YourComponent threshold={16} left={120} top={-130} />
                <YourComponent threshold={17} left={210} top={-200} />
                <YourComponent threshold={18} left={310} top={-130} />


            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        marginTop: 850,
    },
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
});

export default AdventScreen;
