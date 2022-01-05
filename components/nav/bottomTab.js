import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/pages/home'
import Details from '../../screens/pages/details'
import Login from '../../screens/auth/login'
import AddTips from '../../screens/admin/add-tips'
import Register from '../../screens/auth/register'
import {HymnStack,LivestreamStack,DashboardStack,BaseStack,AuthStack}
from './stack-nav'

//Options
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
        
//RootBottomNav
export default function RootBottomNav({navigation}){
   const rootScreen = createBottomTabNavigator()
   return(
     <rootScreen.Navigator screenOptions={{
    headerShown: false
  }} >
      <rootScreen.Screen name="Home" component={BaseStack}/>
      <rootScreen.Screen name="Login" component={AuthStack}/>
     </rootScreen.Navigator> 
     )}

//MainBottomNav
export function MainBottomNav({navigation}){
   const rootScreen = createBottomTabNavigator()
   return(
     <rootScreen.Navigator screenOptions={{
    headerShown: false
  }} >
      <rootScreen.Screen name="Home" component={BaseStack}/>
      <rootScreen.Screen name="Live stream" component={LivestreamStack}/>
      <rootScreen.Screen name="Hymns" component={HymnStack}/>
      <rootScreen.Screen name="Dashboard" component={DashboardStack}/>
     </rootScreen.Navigator> 
     )}