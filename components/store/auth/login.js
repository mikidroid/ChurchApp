import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = {
  login:thunk(async(action,payload)=>{
    action.setLoading(true)
    
     const _login = await firebase.auth()
      .signInWithEmailAndPassword(payload.email,payload.password).then(async(_log)=>{
        
     if(_log && _log.user){
      const userId= firebase.auth().currentUser.uid
      const db = firebase.firestore()
      const query = await db.collection('users')
      .doc(userId).get()
      const user = query.data()
      
      if(user.username=='admin' || user.level >= 3){
       AsyncStorage.setItem('adminToken',userId)
       } 
       AsyncStorage.setItem('token',userId)
       AsyncStorage.setItem('email',payload.email)
       AsyncStorage.setItem('password',payload.password)
       action.setLoading(false)
       action.setAuthChecking(true)}
       
    }).catch(e=>{
      RN.Alert.alert("🚫 Error","Login failed!")
      action.setLoading(false)
    })
  })
}
