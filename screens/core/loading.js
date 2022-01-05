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

export default function Loading({navigation}){
  //Start values
  const {checkAuth,setLoading}=useStoreActions(actions=>actions)
  const {auth,adminAuth}=useStoreState(state=>state)
  const val3=""
  const val4=""
  const val5=""
  
  //Use effect
  React.useEffect(()=>{
      
  },[])
  
  //Start commands
  const com1=()=>{
    
  }
  
  const com2=()=>{
    
  }
  
  //Main code
  return (
    <RN.View opacity={0.2} style={styles.view} >
    <NB.Center p={2} flex={1}>
     <RN.ActivityIndicator 
     size={150} 
     color={COLORS.secondary} />
    </NB.Center>
    </RN.View>
         )
  
}

export const styles=RN.StyleSheet.create({
    view:{
      flex:1,
      position:'absolute',
      zIndex:1,
      width:'100%',
      height:'100%',
      backgroundColor:'#000'
      
    }
})