import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location'

export default function _fetchLocation(){
  return{
  //fetch Location
  fetchLocation:thunk(async(action,payload)=>{
     let {status} = await Location.requestForegroundPermissionsAsync()
     if( status!=='granted')
     { RN.Alert.alert("Permission failed!")}
     const {coords} = await Location.getCurrentPositionAsync({})
     action.setLocation(coords)
  }),
}
}
