import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text,Alert,Button, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {useStoreState,useStoreActions} from 'easy-peasy'
import Drawer from './drawerNav.js'
import BottomNav from './bottomTab.js'
import AuthCheck from '../../screens/auth/authCheck.js'
import Subscription from '../../screens/auth/subscription.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function index({navigation}){
   const BottomTab = createBottomTabNavigator()
  const {checkAuth,setAuthChecking,setHymnsList}=useStoreActions(actions=>actions)
  const {auth,subcribed,authChecking,adminAuth,loading}=useStoreState(state=>state)
   const DrawerNav=createDrawerNavigator()
   
   React.useEffect(()=>{
     setAuthChecking(true)
  },[])
   
   const Stack = createNativeStackNavigator()
   
   if(authChecking) {return  (<AuthCheck/>)}
     
   //Render ther other navigation
   return(
     <Stack.Navigator 
       screenOptions={{headerShown: false }} 
       >
       {!subcribed &&
       <Stack.Group> 
        <Stack.Screen name='Subscription' component={Subscription}/> 
       </Stack.Group>
       }
      {auth?
      <Stack.Screen name='drawer' component={Drawer}/> :
      <Stack.Screen name='bottomNav' component={BottomNav}/>
      }
     </Stack.Navigator> 
   
     )
}

