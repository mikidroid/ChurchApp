import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hymnsJson from '../../components/database/hymns.json'
import * as Location from 'expo-location'
import Auth from './auth'
import Livestream from './livestream'

 const store = createStore({
  loading:false,
  hymnsList:[],
  location:{},
  balance:40000,
  tips:[],
  tipDetails:null,
  books:[],
  bookDetails:null,
  chapters:[],
  chapterDetails:null,
  
  setLoading:action((state,payload)=>{
      state.loading=payload
  }),
  
  setHymnsList:action((state,payload)=>{
      state.hymnsList=hymnsJson
  }),
  
  //Actions
  tips:action((state,payload)=>{
    state.tips=payload
  }),
  
  tipDetails:action((state,payload)=>{
    state.tipDetails=payload
  }),
  
  setLocation:action((state,payload)=>{
    state.location=payload
  }),
  
  //Auth
  ...Auth(),
  //Livestream
  ...Livestream(),

   //fetch Location
  fetchLocation:thunk(async(action,payload)=>{
     let {status} = await Location.requestForegroundPermissionsAsync()
     if( status!=='granted')
     { RN.Alert.alert("Permission failed!")}
     const {coords} = await Location.getCurrentPositionAsync({})
     action.setLocation(coords)
  }),
  
});

export default store

    
