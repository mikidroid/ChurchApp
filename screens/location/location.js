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
import * as Location from 'expo-location'
//Config, please change dir when neccessary
import CONFIG from '../../components/config/config'
import COLORS from '../../components/config/colors'
//Custom core utilities
import Loading from '../core/loading.js'
import MapView from 'expo'

export default function Locations(){
  //Start values
  const {fetchLocation,setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading,location}=useStoreState(state=>state)
  const val4=""
  const val5=""
  
  //Use effect
  React.useEffect(async()=>{
  fetchLocation()
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
    Longitude: {location.longitude}
    Latitude:  {location.latitude}
    </NB.Text>
    
    <MapView  initialRegion={{latitude:location.latitude,longitude:location.longitude}}/>
    </NB.Box>
    </RN.View>
         )
  
}