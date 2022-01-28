import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function index () {
  return{
  // states
  livestreams:null,
  
  //actions
  setLivestreams:action((state,payload)=>{
      state.livestreams=payload
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
  
}
}
