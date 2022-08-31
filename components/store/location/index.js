import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location'
import FetchLocation from './fetch-location.js'

export default function index(){
  return{
    //state
    location:{},
    //Actions
    setLocation:action((state,payload)=>{
    state.location=payload
    }),
    //Trunk
   ...FetchLocation()
}
}
