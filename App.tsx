
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { create } from 'react-test-renderer';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';

import Home from './src/screens/Home'
import Details from './src/screens/Details'
import { Dog } from './src/data/Dog';
import AppThemeProvider from './src/theme/ThemeContext';


export type MainNavParamList = {
  Home: undefined,
  Details: { dog: Dog }
}
const Stack = createNativeStackNavigator<MainNavParamList>()




export default function App() {
  return (
    <AppThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name='Details' component={Details}
            options={{
              headerShown: false
            }} />

        </Stack.Navigator>
      </NavigationContainer>
    </AppThemeProvider>


  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 32,
    fontFamily: 'Sailec-Medium'
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
})