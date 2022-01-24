import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CheckAuth = {
  
    checkAuth:thunk(async(action,payload)=>{
    const userToken= await AsyncStorage.getItem('token')
    const _password= await AsyncStorage.getItem('password')
    const _email= await AsyncStorage.getItem('email')
    const adminToken= await AsyncStorage.getItem('adminToken')
    //if there is user stored in async
    if(userToken){
      if(adminToken){
        action.setAdminAuth(true)
        }
      //try to login user to get details
       await firebase.auth()
      .signInWithEmailAndPassword(_email,_password).then(async(_log)=>{
        if(_log && _log.user){
         const userId=firebase.auth().currentUser.uid
         action.fetchUser(userId) 
         action.setAuth(true)
         action.setAuthChecking(false)
        }})}
     //if there is no user token
     else{ action.setAuth(false)
           action.setAuthChecking(false)}
    }),
       
}
