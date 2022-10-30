import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';

export function BoxDiscover(props) {
  const {text, video} = props;

  return (
    <View style={styles.all}>
      <Video  
        source={{uri: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video}.mp4`}}
        paused={false}
        style={styles.box}
        repeat={true}
        muted={true}
      />
      <View style={styles.video}>
        <View style={styles.triangle} />
      </View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.circle}>
      <Feather style={styles.info} name='info' size={60}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  all: {
    marginTop: 28,
    marginRight: 18,
    width: 155,
    borderRadius: 20,
  },
  box: {
    borderRadius: 20,
    width: 155,
    height: 263,
    position:'absolute',
  },
  video: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 62,
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
  text: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 55,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 100,
    height: 45,
    paddingTop: 7,
    width: 130,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  circle: {
    width: 55,
    height: 55,
    backgroundColor: 'black',
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 3,
  },
  info: {
    color: 'white',
    fontSize: 33,
    marginLeft: 11,
    marginTop: 11,
  },
});