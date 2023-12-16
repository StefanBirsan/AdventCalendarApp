import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdventScreen from "./adventscreen";
import AdventScreen2 from "./adventscreen2";
import { createStackNavigator } from "@react-navigation/stack";
import Ecransmek from "./pushEcran";
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TopTab = () => {
    return (
        <Tab.Navigator tabBar={() => null}>
            <Tab.Screen name="AdventCal" component={AdventScreen} options={{ swipeEnabled: true }} />
            <Tab.Screen name="AdventCal2" component={AdventScreen2} options={{ swipeEnabled: true }} />
        </Tab.Navigator>
    )
};

const BottomTabScreen = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="snow" size={size} color={"black"} />
                    ),
                    tabBarLabel: ({ focused, color }) => {
                        const labelStyle = {
                            color: focused ? 'black' : 'gray',
                        };
                        return <Text style={labelStyle}>Advent</Text>;
                    },
                }}
                name={"Advent"}
                component={TopTab}
            />
        </BottomTab.Navigator>
    )
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Advent Calendar"
                    component={BottomTabScreen}
                />
                <Stack.Screen
                    name={"ecransmek"}
                    component={Ecransmek}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
