import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import * as LocalAuthentication from 'expo-local-authentication'

export default function Home({ navigation }) {

  const MAX_AUTHENTICATION_TIME = 60000; // 1 minuto
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  gif = { url: require('../../images/door.gif'), height: 128, width: 192 }
  img = { url: require('../../images/doorclose.png'), height: 128, width: 192 }

  async function handleAuthentication() {
    let authenticationTimer;

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'É necessário usar o Touch ID para usar a aplicação',
      fallbackLabel: 'É necessário usar o Touch ID para usar a aplicação',
    });

    setIsAuthenticated(auth.success);

    if(auth.success) {
      authenticationTimer = setTimeout(() => {
        console.log('Tempo de autenticação expirado.');
        LocalAuthentication.cancelAuthenticate();
        setIsAuthenticated(false);
        Alert.alert('Atenção', 'Tempo de autenticação expirado')
      }, MAX_AUTHENTICATION_TIME);

    }

    return () => {
      clearTimeout(authenticationTimer);
    };
  }

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercício 6 Mobile</Text>
      <TouchableOpacity style={styles.authButton} onPress={handleAuthentication}>
        <Text style={styles.textButton}>Autenticar usuário</Text>
      </TouchableOpacity>
      {
        isAuthenticated ?
          <TouchableOpacity onPress={() => {
            navigation.navigate('Passagem');
          }}>
            <Image
              style={{ height: gif.height, width: gif.width }}
              source={gif.url}
            />
          </TouchableOpacity>
          :
          <Image
            style={{ height: img.height, width: img.width }}
            source={img.url} />
      }
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
  authButton: {
    marginVertical: 30,
    height: 60,
    width: '70%',
    backgroundColor: '#414BB2',
    borderRadius: 5,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
  }
});