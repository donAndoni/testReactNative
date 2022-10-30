import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

export const Logo = () => (
  <View style={styles.generalContainer}>
    <Image 
    style={{width: '100%', height: '80%'}} source={require('./images/Logo-_-Digizone-Labs-Letra-Blue.png')}
    />
    <Text style={styles.texto}>TEST</Text>
  </View>
);

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
  },
  texto: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomWidth: 3,
    borderBottomColor: '#0f65ba',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});