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
import MapView from 'react-native-maps'

export default function Locations(){
  //Start values
  const {fetchLocation,setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading,location}=useStoreState(state=>state)
  const [lat,setLat]=React.useState()
  const [lng,setLng]=React.useState()
  const [region,setRegion] = React.useState({})
  
  //Use effect
  React.useEffect(()=>{
    const reg = {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
    }
  setRegion(reg)
  setLng(location.longitude)
  setLat(location.latitude)
  
    

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
    Longitude: {region.longitude}
    Latitude:  {region.latitude}
    </NB.Text>
       <MapView  style={{width:'100%',height:'100%'}} initialRegion={region}
         onRegionChange={(reg)=>setRegion(reg)}
            >
    
        <MapView.Circle
        center={{latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,}}
        radius={40}
        strokeWidth={30}
        strokeColor="rgba(128, 191, 255,0.5)"
        fillColor="#2377dd"
      />
    </MapView>
 
    </NB.Box>
    </RN.View>
         )
  
}