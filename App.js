import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import YourComponent from "./daybutton";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <YourComponent threshold={2} left={20} top={20} text={'skitza'}/>
      <YourComponent threshold={2} left={120} top={-54} text={'genious'}/>
      <YourComponent threshold={2} left={220} top={20} text={'no clue'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    marginTop: 150,
  },
});
