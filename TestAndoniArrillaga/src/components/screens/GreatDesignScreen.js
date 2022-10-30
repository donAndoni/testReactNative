import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {BoxDiscover} from '../BoxDiscover';
import {Circle} from '../Circle';
import {BoxTrending} from '../BoxTrending';

const GreatDesignScreen = () => (
  <ScrollView style={styles.all}>
    <View style={styles.header} >
      <Image
        style={styles.logo}
        source={require('../images/logo-beder.png')}
      />
      <View style={styles.heartContainer}>
        <Ionicons style={styles.heart} name='heart-outline' size={36}/>
        <View style={styles.heartPoint} />
      </View>
      <View style={styles.searchSection}>
        <Ionicons style={styles.searchIcon} name='search-outline'/>
        <TextInput style={styles.input} placeholder=" Search forDestinations, People" placeholderTextColor= '#aaa'/>
      </View>
    </View>
    <View style={styles.discover}>
      <Text style={styles.title}>DISCOVER</Text>
      <ScrollView horizontal={true} style={styles.boxes}>
        <BoxDiscover text='Los Angeles' video='BigBuckBunny' />
        <BoxDiscover text='Hawaii' video='ElephantsDream' />
        <BoxDiscover text='Reykjavik' video='ForBiggerBlazes' />
        <BoxDiscover text='Murcia' video='ForBiggerEscapes' />
        <BoxDiscover text='Donostia' video='ForBiggerFun' />
      </ScrollView>
    </View>
    <View style={styles.community}>
      <Text style={styles.title2}>MY COMMUNITY</Text>
      <ScrollView horizontal={true} style={styles.circles}>
        <Circle text='Jane_Smith' photo='1' />
        <Circle text='Sara_Parker' photo='2' />
        <Circle text='James_Frd' photo='3' />
        <Circle text='Andoni' photo='4' />
        <Circle text='Arrillaga' photo='5' />
      </ScrollView>
    </View>
    <View style={styles.trending}>
      <Text style={styles.title3}>TRENDING NOW</Text>
      <ScrollView horizontal={true} style={styles.boxes2}>
        <BoxTrending text='ADVENTURE & SPORTS' video='Sintel' />
        <BoxTrending text='NATURE' video='Sintel' />
        <BoxTrending text='MOUNTAINS' video='Sintel' />
        <BoxTrending text='SPA' video='SubaruOutbackOnStreetAndDirt' />
        <BoxTrending text='KAYAK' video='TearsOfSteel' />
      </ScrollView>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  all: {
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 210,
    height: 65,
    marginTop: 15,
  },
  heartContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  heart: {
    color: 'black',
    position: 'relative',
  },
  heartPoint: {
    position: 'relative',
    width: 9,
    height: 9,
    top: -15,
    right: -20,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  searchSection: {
    width: '90%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(0,243,205)',
    borderRadius: 100,
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 100,
    elevation: 15,
    backgroundColor: 'white',
    marginTop: 15,
  },
  searchIcon: {
    paddingLeft: 17,
    paddingTop: 2,
    fontSize: 19,
  },
  input: {
    flex: 1,
    width: '90%',
    fontSize: 17,
    fontWeight: 'bold',
    paddingTop: 8,
  },
  discover: {
    width: '100%',
  },
  title: {
    color: 'black',
    display: 'flex',
    textAlign: 'left',
    marginTop: 15,
    marginLeft: 10,
    fontSize: 34,
    fontWeight: 'bold',
  },
  boxes: {
    marginLeft: 20,
    height: 320,
    position: 'relative',
    top: -15,
  },
  community: {
    width: '100%',
    height: 189,
    backgroundColor: '#000',
    display: 'flex',
  },
  title2: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 20,
  },
  circles: {
    flexDirection: 'row',
    marginLeft: 4,
  },
  trending: {
    width: '100%',
  },
  title3: {
    color: 'black',
    display: 'flex',
    textAlign: 'left',
    marginTop: 13,
    marginLeft: 20,
    fontSize: 23,
    fontWeight: 'bold',
  },
  boxes2: {
    flexDirection: 'row',
    marginTop: 11,
    marginBottom: 20,
    marginLeft: 18,
  },
});

export default GreatDesignScreen;