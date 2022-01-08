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

export default function Profile({navigation}){
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
    <RN.View style={{flex:1}} >
    {  //Loading code
     loading && <Loading/>
    }
    <NB.Box p={2} flex={1}>
    <NB.Text>
      Username:  {user.username}
    </NB.Text>
    <NB.Text>
      Email:  {user.email}
    </NB.Text>
    <NB.Button onPress={()=>navigation.navigate('Edit profile')}>
    Edit profile
    </NB.Button>
    </NB.Box>
    </RN.View>
         )
  
}