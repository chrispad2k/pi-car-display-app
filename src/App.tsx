import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {scanAndConnect, sendMessage} from './BLE';

const App = () => {
  const [message, setMessage] = useState('');

  scanAndConnect();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Input Message:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(input) => setMessage(input)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={() => sendMessage(message)}>
        Send
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {},
  input: {},
  button: {},
});

export default App;
