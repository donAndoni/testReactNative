import React from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';

export function Circle(props) {
  const {text, photo} = props;

  return(
    <View style={[styles.community]}>
      <Image source={{uri: `https://randomuser.me/api/portraits/lego/${photo}.jpg`}} style={[styles.circle]} />
      <Text style={styles.name}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  community: {
    width: 130,
    marginTop: 4,
  },
  circle: {
    width: 102,
    height: 106,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgb(0,243,205)',
    backgroundColor: '#fa00af'
  },
  name: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 2,
    fontSize: 15,
  },
});