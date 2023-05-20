import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


export default function Home() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Exercício 4 Mobile</Text>
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
  }
});