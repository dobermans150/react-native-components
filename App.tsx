import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigation/StackNavigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent
        hidden
        showHideTransition={'fade'}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
