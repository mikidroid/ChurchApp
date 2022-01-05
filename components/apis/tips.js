import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { StyleSheet, Text,Alert,Button, View} from 'react-native';
import * as React from 'react';

  export default  {
   loadTips:async()=>{
          
  const db = firebase.firestore();
  return db.collection('users').orderBy('name').get()
     
   },
                 
    showTip:(id)=>{
          const data=[{
              name:"Kalk",
              age:34,
              date:4
            },
            {
              name:"Kau",
              age:34,
              date:5
            },
            {
              name:"Kaljdu",
              age:34,
              date:54
            }
            ]
            return data
          },
  
   deleteTip:(id)=>{
      
  }
  ,
   updateTip:(payload)=>{
      
  }
}

