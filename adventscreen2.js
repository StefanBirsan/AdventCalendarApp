import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import YourComponent from "./daybutton";

const AdventScreen2 = () => {
    return (
        <ImageBackground source={require('./assets/adventback.png')} style={styles.background}>
            <View style={styles.container}>

                <YourComponent threshold={19} left={20} top={-750} />
                <YourComponent threshold={20} left={290} top={-650} />
                <YourComponent threshold={21} left={290} top={-370} />
                <YourComponent threshold={22} left={20} top={-240} />
                <YourComponent threshold={23} left={120} top={-440} />
                <YourComponent threshold={24} left={160} top={-600} />

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

export default AdventScreen2;
