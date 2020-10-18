import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import IntroducScreen from './src/screens/IntroducScreen';
import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        <MainStack.Screen
          name="IntroducScreen"
          component={IntroducScreen}></MainStack.Screen>
        <MainStack.Screen
          name="MainScreen"
          component={MainScreen}></MainStack.Screen>
        <MainStack.Screen
          name="DetailScreen"
          component={DetailScreen}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
