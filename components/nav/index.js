import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text,Alert,Button, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useStoreState,useStoreActions} from 'easy-peasy'
import Drawer from './drawerNav.js'
import BottomNav from './bottomTab.js'
import AuthCheck from '../../screens/auth/authCheck.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const option=(title)=>{
        let header,options
        //if header title passed
        if(title){
          header=title
          options ={
           title:header,
           headerStyle:{
             backgroundColor:'#6515ea'
           },
           headerTintColor:'#fff',
           headerTitleStyle:{
             fontWeight:'bold'
           }}
        return options
        }
        //If no header title passed
        options ={
           headerStyle:{
             backgroundColor:'#6515ea'
           },
           headerTintColor:'#fff',
           headerTitleStyle:{
             fontWeight:'bold'
           }}
        return options }


export default function index({navigation}){
   const BottomTab = createBottomTabNavigator()
  const {checkAuth,setAuthChecking,setHymnsList}=useStoreActions(actions=>actions)
  const {auth,authChecking,adminAuth,loading}=useStoreState(state=>state)
   const DrawerNav=createDrawerNavigator()
   
   React.useEffect(()=>{
     setAuthChecking(true)
  },[])
   
   const Stack = createNativeStackNavigator()
   
    if(authChecking) {return  (<AuthCheck/>)}
   

   return(
     <Stack.Navigator screenOptions={{
    headerShown: false
  }} >
      {auth?
      <Stack.Screen name='drawer' component={Drawer}/> :
      <Stack.Screen name='bottomNav' component={BottomNav}/>
      }
     </Stack.Navigator> 
   
     )
}

