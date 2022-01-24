import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

//register
export const Register = {
  register:thunk(async(action,payload)=>{
   action.setLoading(true)
   const db = firebase.firestore()
   
   //When payload is = admin
   if(payload.username == 'admin'){
    const query = await db.collection('users').where('username', '==', 'admin').get();

   //If query is empty
   if (!query.empty) {
     RN.Alert.alert("🚫 Already exists")
     action.setLoading(false)
    //const snapshot = query.docs[0];
    //const data = snapshot.data();
     } 
  
   // if query is empty
   else {
    const _register = await firebase.auth()
    .createUserWithEmailAndPassword(payload.email,payload.password)
    if(_register && _register.user){
     const userId=firebase.auth().currentUser.uid
      const data = {
        user_id:userId,
        email:payload.email,
        password:payload.password,
        username:payload.username,
        level:1,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        updated_at:firebase.firestore.FieldValue.serverTimestamp(),
    } 
      // Set details for future login
      AsyncStorage.setItem('token',userId)
      AsyncStorage.setItem('email',payload.email)
      AsyncStorage.setItem('password',payload.password)
      //set user in firestore
      firebase.firestore().collection('users')
      .doc(userId).set(data)
      //query user in firestore to get user details
      const query = await db.collection('users')
      .doc(userId).get()
      const user = query.data()
      // check if user is admin
      if(user.username=='admin' || user.level >= 3){
      AsyncStorage.setItem('adminToken',userId)
      }
      action.setLoading(false)
      action.setAuthChecking(true)
    }
    else{
      RN.Alert.alert("🚫 Error with registration!")}
  }}
   
   //When payload isnt = admin
   else {
    const _register = await firebase.auth()
    .createUserWithEmailAndPassword(payload.email,payload.password)
    if(_register && _register.user){
     const userId=firebase.auth().currentUser.uid
      
       //The data to be put into the firestore
      const data = {
        user_id:userId,
        email:payload.email,
        password:payload.password,
        username:payload.username,
        level:1,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
        updated_at:firebase.firestore.FieldValue.serverTimestamp(),
       } 
      // Set details for future login
      AsyncStorage.setItem('token',userId)
      AsyncStorage.setItem('email',payload.email)
      AsyncStorage.setItem('password',payload.password)          
      //fetch and add details to users table
      firebase.firestore().collection('users')
      .doc(userId).set(data)
      
      //query firestore to get user details
      const query = await db.collection('users')
      .doc(userId).get()
      const user = query.data()
      //check if user is admin
      if(user.username=='admin'  || user.level >= 3){
      AsyncStorage.setItem('adminToken',userId)
      }
      action.setLoading(false)
      action.setAuthChecking(true)
    }
    else{
      RN.Alert.alert("🚫 Error with registration!")}
  }
  }),  
  
}