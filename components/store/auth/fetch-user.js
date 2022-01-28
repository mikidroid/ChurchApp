import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FetchUser = {
  
  fetchUser:thunk(async(action,payload)=>{
     const db = firebase.firestore()
     const id = payload
     const res = await db.collection('users')
     .doc(id).get()
     const data = res.data()
     action.setUser(data)
  }),
       
}
