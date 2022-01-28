import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
//import Constants from 'expo-constants';
//import * as Notifications from 'expo-notifications';

/*
export default function index () {
  return{
  // states
  notification:null,
  expoToken:null,
  
  //actions
  setNotification:action((state,payload)=>{
      state.notification=payload
  }),
  
  setExpoToken:action((state,payload)=>{
      state.notification=payload
  }),

  //scheduleNotification
  scheduleNotification:thunk(async(action,payload)=>{
      await Notifications.scheduleNotificationAsync({
         content: {
          title: payload.title,
          body: payload.body,
          data: { data: 'goes here' },
         },
         trigger: { seconds: 2 },
      });
  }),
  
  //notificationSettings
  notificationSettings:thunk(async(action,payload)=>{
     Notifications.setNotificationHandler({
       handleNotification: async () => ({
         shouldShowAlert: true,
         shouldPlaySound: false,
         shouldSetBadge: false, }),
     });
  }),
  
  //registerNotification
  registerNotification:thunk(async(action,payload)=>{
     let token
     if(Constants.device){
       const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
      }
     //Get push token
     token = (await Notifications.getExpoPushTokenAsync()).data;
     console.log(token); } 
     //If not device
     else {
        alert('Must use physical device for Push Notifications');}

     if(RN.Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync
        ('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
     }
     //return token after everything
     return token;
  }),
  
}
}

&/
