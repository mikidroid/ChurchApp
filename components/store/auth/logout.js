import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Logout = {
  
  logout:thunk(async(action,payload)=>{
    action.setLoading(true)
    const _logout = await firebase.auth()
    .signOut()
    .then(()=>{
      const data = ['token','adminToken','user','email','password']
      data.forEach(key=>{
       AsyncStorage.removeItem(key)
      })
      action.setUser({})
      action.setLoading(false)
      action.setAuthChecking(true)
     })
     .catch((e)=>{
      RN.Alert.alert("🚫 Error","Unable to logout!")
     })
    }),
         
       
}
