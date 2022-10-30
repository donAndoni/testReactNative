import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Video from 'react-native-video';

export function BoxTrending(props) {
  const {text, video} = props;

  return(
    <View style={[styles.all]}>
      <Video  
        source={{uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video}.mp4`}}
        paused={false}
        style={styles.box}
        repeat={false}
        muted={true}
      />
      <View style={styles.video}>
        <View style={styles.triangle} />
      </View>
      <View style={styles.subbox}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    width: 215,
    height: 250,
    marginRight: 20,
  },
  box: {
    width: 215,
    height: 220,
    position: 'absolute',
  },
  video: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 35,
  },
  triangle: {
    width: 0,
    height: 0,
    marginTop: 23,
    marginLeft: 21,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 17,
    borderRightWidth: 17,
    borderBottomWidth: 27,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
    transform: [{ rotate: "90deg" }],
  },
  subbox: {
    width: '80%',
    height: 73,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 1,
    borderColor: 'rgb(0,243,205)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 23,
    padding: 1,
  },
});