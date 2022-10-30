import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {Store} from './src/redux/store';

import HomeScreen from './src/components/screens/HomeScreen';
import PublicApiScreen from './src/components/screens/PublicApiScreen';
import ReduxScreen from './src/components/screens/ReduxScreen';
import GreatDesignScreen from './src/components/screens/GreatDesignScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name="PublicApiScreen" component={PublicApiScreen} options={{title:'Public API'}} />
          <Stack.Screen name="ReduxScreen" component={ReduxScreen} options={{title:'Redux Screen'}} />
          <Stack.Screen name="GreatDesignScreen" component={GreatDesignScreen} options={{title:'GreatDesignScreen', headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;