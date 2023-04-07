import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [nota1, setNota1] = useState(null);
  const [nota2, setNota2] = useState(null);
  const [mediaNota, setMediaNota] = useState('')

  function handleNota1Change(nota1) { setNota1(nota1) };
  function handleNota2Change(nota2) { setNota2(nota2) };

  function calcularMedia() {
    const Media = (((parseFloat(nota1) + parseFloat(nota2)) / 2).toFixed(2))
    setMediaNota(`Média do aluno é: ${Media}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular média do aluno</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nota 1"
          clearButtonMode="always"
          inputMode="decimal"
          onChangeText={handleNota1Change}
          value={nota1}
        />
        <TextInput
          style={styles.input}
          placeholder="Nota 2"
          clearButtonMode="always"
          inputMode="decimal"
          onChangeText={handleNota2Change}
          value={nota2}
        />
        <TouchableOpacity style={styles.button} onPress={calcularMedia}>
          <Text style={styles.buttonText}>Calcular nota</Text>
        </TouchableOpacity>
        {mediaNota
          ?
          <Text style={styles.resultMedia}>{mediaNota}</Text>
          : null
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
  },
  title: {
    color: '#292929f3',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50
  },
  inputContainer: {
    flex: 1,
    marginTop: 30,
    width: '90%',
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 15,
    height: 60,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultMedia: {
    color: '#292929f3',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    textAlign: 'center'
  }
});
