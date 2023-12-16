import React from 'react';
import {View, StyleSheet, Text, ImageBackground, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Ecransmek = ({navigation, route}) =>{
    return(
        <View>
            <Text>{route.params.day}</Text>
            <TouchableOpacity onPress={() => navigation.replace("Advent Calendar")}>
                <Text>Replace</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => AsyncStorage.clear()}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Ecransmek;