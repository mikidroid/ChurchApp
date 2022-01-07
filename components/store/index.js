import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import Posts from './posts.js'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hymnsJson from '../../components/database/hymns.json'
import * as Location from 'expo-location'

 const store = createStore({
  loading:false,
  auth:false,
  authChecking:false,
  adminAuth:false,
  user:{},
  hymnsList:[],
  location:{},
  balance:40000,
  livestreams:null,
  tips:[],
  tipDetails:null,
  books:[],
  bookDetails:null,
  chapters:[],
  chapterDetails:null,
  
  
  
  setLoading:action((state,payload)=>{
      state.loading=payload
  }),
  
  setAuth:action((state,payload)=>{
      state.auth=payload
  }),
  
  setHymnsList:action((state,payload)=>{
      state.hymnsList=hymnsJson
  }),
  
  setLivestreams:action((state,payload)=>{
      state.livestreams=payload
  }),
 
  setAuthChecking:action((state,payload)=>{
      state.authChecking=payload
  }),
  
  
  setAdminAuth:action((state,payload)=>{
      state.adminAuth=payload
  }),
  
  setUser:action((state,payload)=>{
      state.user=payload
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
  
  //fetch other data types
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
        }})
 }
     //if there is no user token
     else{ action.setAuth(false)
           action.setAuthChecking(false)
     } 
     
  }),
  
  //register
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
  }
  }
   
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
  
  //Login
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
    
    
    
  }),
  
  //Logout
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
  
  //fetch Livestreams
  fetchLivestreams:thunk(async(action,payload)=>{
     action.setLoading(true)
     const db = firebase.firestore()
     const res = await db.collection('livestreams')
     .orderBy('created_at','desc').limit(10)
     
     res.onSnapshot(snapshot=>{
       let data=[]
       snapshot.forEach(doc=>{
        data.push({id:doc.id,...doc.data()})
       })
       action.setLivestreams(data)
       action.setLoading(false)
     })
  }),
  
  //Add Livestream
  addLivestream:thunk(async(action,payload)=>{
     action.setLoading(true)
     const db = firebase.firestore()
     const res = await db.collection('livestreams').add({
       title: payload.title,
       link: payload.link,
       created_at: firebase.firestore.FieldValue.serverTimestamp()
     })
     res? RN.Alert.alert("✅ Successful","Livestream added successfully!") : RN.Alert.alert("🚫 Error Alert!","Error while adding link!")
     action.setLoading(false)
  }),
  
    //fetch User
  fetchUser:thunk(async(action,payload)=>{
     const db = firebase.firestore()
     const id = payload
     const res = await db.collection('users')
     .doc(id).get()
     const data = res.data()
     action.setUser(data)
  }),
  
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

/*
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
    */
    
