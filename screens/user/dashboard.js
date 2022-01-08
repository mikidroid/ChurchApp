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

export default function Dashboard({navigation}){
  //Start values
    const {setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading,user}=useStoreState(state=>state)
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
    <NB.Button mb={2} onPress={()=>navigation.navigate('Profile')}>
    Go to profile
    </NB.Button>
    {
     adminAuth &&
    <NB.Button onPress={()=>navigation.navigate('Admin dashboard')}>
    Go to admin
    </NB.Button>
    }
    </NB.Box>
         )
  
}