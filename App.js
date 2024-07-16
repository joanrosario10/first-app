import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert,TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputeContiner}>
        <TextInput style={styles.textInpute} placeholder ='Input your text' />
        <Button title=' ADD TEXT'/>
      </View>
      <View>
        <Text>Your text will reflext over here !</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding: 50,
  },
  inputeContiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
   textInpute:{
  width: '80%',
  borderWidth:1,
  borderColor: '#cccccc',
  marginRight: 8,
 }
});
