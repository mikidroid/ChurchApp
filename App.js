import 'react-native-gesture-handler';
import React,{useState} from 'react';
import firebase from 'firebase/compat/app';
import { StatusBar } from 'expo-status-bar';
import config from './components/database/config'
import { NativeBaseProvider, Box,Center } from 'native-base';
import { StyleSheet, Text,Alert,Button, View} from 'react-native';
import {StoreProvider} from 'easy-peasy'
import store from './components/store'
import { NavigationContainer } from '@react-navigation/native';
import Nav from './components/nav'
import {RootBottomNav} from './components/nav/bottomTab.js'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';

export default function App() {
  // AsyncStorage.setItem('token', 'value')
    firebase.initializeApp(config)
  

  
  
  return (
    <StoreProvider store={store}>
    <NavigationContainer>
    <NativeBaseProvider 
      config={{ 
        dependencies: {
         'linear-gradient': require('expo-linear-gradient').LinearGradient}
       }}>
    <Nav/>
    <StatusBar style='dark' />
    </NativeBaseProvider>
    </NavigationContainer>
    </StoreProvider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
