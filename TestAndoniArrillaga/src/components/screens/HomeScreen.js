import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Logo} from '../Logo';

const HomeScreen = ({navigation}) => (
  <View style={styles.generalContainer}>
    <View style={styles.logoContainer}>
      <Logo />
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigation.navigate('PublicApiScreen')}>
        <Text style={styles.text}>Public API</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.navigate('ReduxScreen')}>
        <Text style={styles.text}>Redux</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.button3]} onPress={() => navigation.navigate('GreatDesignScreen')}>
        <Text style={styles.text}>Great Design</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.footerContainer}>
      <Text style={styles.footer}>by Andoni Arrillaga</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 5,
  },
  footerContainer: {
    flex: 1,
    borderTopWidth: 3,
    borderTopColor: '#0f65ba',
    backgroundColor: '#222',
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 2,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  button1: {
    borderColor: '#0055aa',
    backgroundColor: '#e1e2e3',
  },
  button2: {
    borderColor: '#0f65ba',
    backgroundColor: '#d1d2d3'
  },
  button3: {
    borderColor: '#1f75ca',
    backgroundColor: '#c1c2c3',
  },
  text: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#0f65ba',
  },
  footer: {
    color: '#f1f2f3',
    fontSize: 17,
    position: 'absolute',
    bottom: 30,
    width: '100%',
    textAlign: 'center',
  },
});

export default HomeScreen;