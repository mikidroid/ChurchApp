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
import axios from 'react-native-axios'
import {WebView} from 'react-native-webview'

export default function LocationDetails({navigation,route}){
  //Start values
  const {fetchLocation,setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading,location}=useStoreState(state=>state)
  const [lat,setLat]=React.useState()
  const [lng,setLng]=React.useState()
  const [region,setRegion] = React.useState({})
  const {place_id} = route.params
  const [data,setData] = React.useState({})
  const [newD,setNewD] = React.useState([])
  const [newD2,setNewD2] = React.useState([])
  //Use effect
  React.useEffect(()=>{
    const lat = location.latitude
    const lng = location.longitude
    const api = CONFIG.PLACES_API
    // must be specified as Lat, Long
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${api}`

    axios.get(url).then(r=>{
      setData(r.data.result)
      setNewD(r.data.result.reviews)
      setNewD2(r.data.result.opening_hours.weekday_text)
        //setData(JSON.stringify(r.data.result))
    })
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
    
    <NB.Box
    bg={{
        linearGradient: {
          colors: ['lightBlue.200', 'violet.300'],
          start: [0, 0],
          end: [1, 0],},
       }}
      p="2"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}>
      
<NB.Text p={2} fontSize={20}>
 {data.name}
</NB.Text>
<NB.Text p={2}>
    {data.formatted_address}
</NB.Text>
   { data.formatted_phone_number &&
    <NB.Text textAlign='center' my={2} fontWeight={700}>
    {data.formatted_phone_number}
    </NB.Text>
   }
</NB.Box>
<NB.Divider height={2} my={4} />

    <NB.ScrollView>
    <NB.Text textAlign='center'>
    Rating {data.rating}✴️
    </NB.Text>
    <NB.Divider my={4}/>
    
    <NB.VStack px={3}>
    <NB.HStack >
    <Icon 
       style={{marginTop:5}}
       size={16}
       color={COLORS.secondary}
       name="chevron-down" />
    <NB.Text ml={2} color={COLORS.dark} fontSize={18}>
    Comments ({newD?newD.length:0})
    </NB.Text>
    </NB.HStack>
      
    {
      Array.isArray(newD) && 
      newD.map((item)=>{
        return(
        <>
    <NB.VStack py={2}>
    <NB.Text fontWeight="bold">
    {item.author_name}
    </NB.Text>
    <NB.Text>
    {item.text}
    </NB.Text>
    </NB.VStack>
    <NB.Divider/>
    </>
        )
      })
    }
    </NB.VStack>
    
   <NB.Divider h={2}/>
   
    <NB.VStack mt={5} px={3}>
    <NB.HStack >
    <Icon 
       style={{marginTop:5}}
       size={16}
       color={COLORS.secondary}
       name="chevron-down" />
    <NB.Text ml={2} color={COLORS.dark} fontSize={18}>
    Opening hours
    </NB.Text>
    </NB.HStack>
     { newD2.map((item)=>{
    return(
    <>
    <NB.Text py={2}>
    {item}
    </NB.Text>
    <NB.Divider/>
    </>
        )})
    }
    </NB.VStack>
   
    </NB.ScrollView>
    </NB.Box>
    </RN.View>
         )
  
}