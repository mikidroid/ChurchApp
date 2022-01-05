import * as React from 'react';
import * as NB  from 'native-base';
import * as RN from 'react-native';
import * as RE from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useStoreState,useStoreActions} from 'easy-peasy'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Config, please change dir when neccessary
import CONFIG from '../../components/config/config'
import COLORS from '../../components/config/colors'

export default function App(){
  //Start values
  const auth=useStoreState(state=>state.auth)
  const adminAuth=useStoreState(state=>state.adminAuth)
  let [title,setTitle]=React.useState()
  let [content,setContent]=React.useState()
  let [img_url,setImg_url]=React.useState()
  let [category,setCategory]=React.useState()
  const db=firebase.firestore()
  const val3=""
  const val4=""
  const val5=""
  
  //Use effect
  React.useEffect(()=>{
    
  return()=>{}
  },[])
  
  //Start commands
  const com1=()=>{
    
  }
  
  const com2=()=>{
    
  }
  
  //Main code
  return (
    <NB.Box p={2} flex={1}>
    <NB.Text style={{color:"#767676",marginLeft:10,fontSize:15}}> Title
    </NB.Text>
    
      <NB.Input
         mx="3"
         onChangeText={(e)=>setTitle(e)}
          value={title}
          w={{
            base: "75%",
            md: "25%",
          }}/>
          
    <NB.Text style={{color:"#767676",marginLeft:10,fontSize:15}} > Age
    </NB.Text>
          
      <NB.Input
         mx="3"
         onChangeText={(e)=>{
         setContent(e)}}
        value={content}
          w={{
            base: "75%",
            md: "25%",
          }}/>
          
    <RE.Button
       title="Add tip"
       titleStyle={{
         color:"#efefef"
       }}
       buttonStyle={{
         marginTop:5,
         backgroundColor:COLORS.primary
       }}
       onPress={async()=>{
        await firebase.firestore().collection('tips').add({
           title:title,
           content:content,
           img_url:img_url,
           category:category,
           date:Date.now()
         })
         fetchP()
         
       }}
       ></RE.Button>
    </NB.Box>
         )
  
}