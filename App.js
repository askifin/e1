import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const [a, aa] = useState('');
  const [b, bb] = useState('');
  const [number] = React.useState(null);
  const plussa = () => { 
    var c = parseInt(a);
    var d = parseInt(b);
    Alert.alert('Summa: ' + c+d); 
  };
  const miinus = () => { 
    var c = parseInt(a);
    var d = parseInt(b);
    Alert.alert('Erotus: ' + c-d); 
  };

  return (
    
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={a => aa(a)}
        value={number}
        placeholder="Kirjaa luku"
        keyboardType="numeric"
        id="a"
      />
      <TextInput
        style={styles.input}
        onChangeText={b => bb(b)}
        value={number}
        placeholder="Kirjaa luku"
        keyboardType="numeric"
        id="b"
      />
      <Button style={styles.button} onPress={plussa} title="+" />
      <Button style={styles.button} onPress={miinus} title="-" />
      
      <StatusBar style="auto" />
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input : {
    width:200  , 
    borderColor: 'gray', 
    borderWidth: 1
    
  },

  button : {
    flexDirection: 'row',
  }
});