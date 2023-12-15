import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AdventScreen from "./adventscreen";
import AdventScreen2 from "./adventscreen2";

const Tab = createMaterialTopTabNavigator()



export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            swipeEnabled={true}
            tabBar={() => null}
        >
            <Tab.Screen
                name="Advent Calendar"
                component={AdventScreen}

            />
            <Tab.Screen
                name="Advent Calendar 2"
                component={AdventScreen2}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

