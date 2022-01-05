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
//Database
import hymnsJson from '../../components/database/hymns.json'

export default function Dashboard({navigation,route}){
  //Start values
  const {setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading}=useStoreState(state=>state)
  const {hymn}=route.params
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

    <NB.Box p={2} mr={4} flex={1}>
    <RN.ScrollView showsVerticalScrollIndicator={false} >
    <NB.Text mb={-2} textAlign='center' p={2} fontWeight={700} fontSize={40}> RCH - {hymn.c0Id}
    </NB.Text>
    
    <NB.Text textAlign='center' p={2} fontWeight={400} fontSize={30}>
    { hymn.c1title}
    </NB.Text>
    
    <NB.Text p={2} textAlign='center' fontSize={10}>
  The Revised Church Hymnary used in the Presbyterian church
    </NB.Text>
    
    <NB.Divider my={2} h={0.5}></NB.Divider>
    
    <NB.Text p={2} textAlign='center' fontSize={18}>
    { hymn.c4lyrics}
    </NB.Text>
       </RN.ScrollView>
    </NB.Box>
   
    </RN.View>
         )
  
}