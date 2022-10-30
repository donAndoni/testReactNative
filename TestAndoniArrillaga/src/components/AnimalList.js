import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export function AnimalList({animal}) {
    return (
        <View style={styles.container}>
            <Image source={{uri: animal.image_link}} style={styles.image}/>
            <View>
                <Text style={styles.name}>{animal.name}</Text>
                <Text style={styles.habitat}>( {animal.habitat} )</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 5,
      paddingLeft: 15,
      paddingRight: 80,
      borderBottomWidth: 2,
      borderBottomColor: '#c1c2c3',
      borderBottomStartRadius: 20,
      borderBottomEndRadius: 20,
      backgroundColor: '#f2f3f4',
      },
    image: {
      width: 70,
      height: 70,
      resizeMode: 'contain',
      marginRight: 10,
      borderRadius: 100,
    },
    name: {
      fontWeight: 'bold',
      fontSize: 23,
    },
    habitat: {
      fontSize: 13,
      flexWrap: 'wrap',
    }
  })