import React from 'react';
import { View, StyleSheet, Image } from 'react-native'


export default function Passagem() {

  gif = { url: require('../../images/treasure.gif'), height: 320, width: 320 }

  return (
    <View style={styles.container}>
          <Image
            style={{ height: gif.height, width: gif.width }}
            source={gif.url} />    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#281c1a',
    alignItems: 'center',
    justifyContent: 'center',
  }
});