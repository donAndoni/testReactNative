import React, {useEffect} from 'react';
import {FlatList, View} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {setAnimals} from '../../redux/actions';

import {AnimalList} from '../AnimalList';

export default function PublicApiScreen(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

  const {animals} = useSelector(state=>state.lastApiCall);
  const dispatch = useDispatch();

  useEffect(function () {
    async function fetchData(){
      const response = await fetch(url);
      const json = await response.json();
      dispatch(setAnimals(json));
    };
    fetchData();
  }, [] );

  return(
    <View>
      <FlatList
        data={animals}
        renderItem={({item}) => <AnimalList animal={item} />}
        keyExtractor={item => item.name}
      />
    </View>
  );
}