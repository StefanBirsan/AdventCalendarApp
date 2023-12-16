// FirstScreen.js

import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import YourComponent from "./daybutton";
import {pateu} from "./sugestiv";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';


const AdventScreen = () => {

    const [storageData, setStorageData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('advent_day')
                let output = jsonValue != null ? JSON.parse(jsonValue) : null;

                if (output != null) {
                    output = Object.keys(output);

                }
                else
                {
                    output = [];
                }
                return output;

            } catch(e) {
                // error reading value
            }
        }
        getData().then((output) => {
            setStorageData(output);
            console.log("pita cu pateu")
        })
    }, []);

    return (
        <ImageBackground source={require('./assets/adventback.png')} style={styles.background}>
            <View style={styles.container}>
                {pateu.map((item, index) => {

                    let colorsmek="#c4180c"

                    const idee = index + 1;

                    if (storageData.includes(item.threshold.toString())) {
                        colorsmek="#00ff00"
                    }
                    return (
                        <YourComponent key={index} threshold={item.threshold} left={item.left} top={item.top} backgroundColor={colorsmek} text="Custom Text" lineColor={"green"}/>
                    )
                })}



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
