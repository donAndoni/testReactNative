import React from 'react';
import {View, FlatList} from 'react-native';

import {useSelector} from 'react-redux';

import {AnimalList} from '../AnimalList';

export default function ReduxScreen(){
  const {animals} = useSelector(state=>state.lastApiCall);

  if(animals==''){
    alert("No data found")
  }

  return(
  <View>
    <FlatList
        data={animals}
        renderItem={({item}) => <AnimalList animal={item} />}
        keyExtractor={item => item.name}
      />
  </View>
  );
};