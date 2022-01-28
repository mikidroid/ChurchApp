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
//Custom core utilities
import Loading from '../core/loading.js'

export function Advert(props){
  //Start values
  const {setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading}=useStoreState(state=>state)
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
    <NB.Box >
    <NB.Text {...props} >
    Advert 1
    </NB.Text>
    <NB.Text {...props}>
    Advert 2
    </NB.Text>
    <NB.Text {...props}>
    Advert 3
    </NB.Text>
    </NB.Box>
  
         )
  
}