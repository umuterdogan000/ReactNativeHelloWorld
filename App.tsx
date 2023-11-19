import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [submittedData, setSubmittedData] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (text: string) => {
    setName(text);
    setErrorMessage(null); 
  };

  const handleSubmit = () => {
    if (name.trim() === '') {
      setErrorMessage('Veri girmediniz!');
    } else {
      setSubmittedData(name);
      setName('');
    }
  };

    
  return (
    <View style={styles.container}>
      <Text>Hoş Geldiniz</Text>
      <TextInput
        style={styles.input}
        placeholder="Lütfen adınızı giriniz!"
        value={name}
        
        onChangeText={handleInputChange}
      />
  
      <Button title="Şansını Dene" onPress={handleSubmit} color="black"/>

      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      {submittedData && <Text>Merhaba {submittedData}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 12,
    gap: 30,
    borderColor: 'lightblue',
    backgroundColor: 'lightblue',

  },
  
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 5,
    backgroundColor: 'white',
    padding: 8,
    width: '65%',
    borderRadius:50,
    textAlign:'center',

  },
  error: {
    color: 'red',
  },
});

export default App;