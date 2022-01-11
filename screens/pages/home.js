import * as React from 'react';
import * as NB  from 'native-base';
import * as RN from 'react-native';
import * as RE from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useStoreState,useStoreActions} from 'easy-peasy'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
//Config, please change dir when neccessary
import CONFIG from '../../components/config/config'
import COLORS from '../../components/config/colors'
import { useFonts } from 'expo-font';
//Custom core utilities
import Loading from '../core/loading.js'
import {Advert} from './advert.js'
import fontLoad from '../../assets/fonts/Oswald-Regular.ttf'

export default function Home({navigation}){
  //Start values
  const {setLoading,fetchLocation,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading}=useStoreState(state=>state)
  useFonts({
    Oswald: fontLoad,
  })
  const val5=""
  
  //Use effect
  React.useEffect(()=>{
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
    <NB.Box  flex={1}>
    <NB.VStack>
    {/*
    <NB.Box my={1} borderRadius={7} py={2} alignItems='center' >
    <Advert p={2} color='#434343'/>
    </NB.Box>
    */}
    <NB.Box  p={1} py={4} bg={COLORS.dark}  >
    <NB.Text px={3} fontFamily='Lato' fontSize={17} color={'lightBlue.200'}>
    {CONFIG.APP_DESCRIPTION}
    </NB.Text>
    
    <NB.HStack mt={2}>
    
    <NB.Button onPress={()=>navigation.navigate('Dashboard',{screen:'Payment'})} leftIcon={<Icon3 style={{marginTop:2}} color={COLORS.dark} name='cash' size={20} />} mt={2} m={2} >Give to God</NB.Button>
    <NB.Button colorScheme='cyan' leftIcon={<Icon3 color='cyan' name='map-marker-radius' size={20} />} onPress={()=>navigation.navigate('Location')} variant='outline' mt={2} m={2} >PCN Churches Nearby</NB.Button>
    
    </NB.HStack>
    
    </NB.Box>
    
    
    <NB.Image height={200} source={require('../../assets/home-pic1.jpg')} />
    
    <NB.Text color='#1261a0' fontFamily='Oswald' borderRadius={10} fontSize={16} ml={1} mt={5} p={1} pl={5} >
     MAIN ACTIONS  <Icon style={{marginBottom:15}} name='chevron-right' />
    </NB.Text>
    
    <NB.HStack alignItems='center' mt={2}>
    <NB.Box  bg={{
          linearGradient: {
          colors: ['lightBlue.200', 'violet.300'],
          start: [0, 0],
          end: [1, 0],},
      }} borderRadius={6} mb={4} mx={2}  w='45%' >
    <RN.TouchableOpacity onPress={()=>RN.Alert.alert("Feature coming soon!") }>
    <NB.Text fontWeight='700' p={7} color='#124160' >
    <Icon style={{marginBottom:15}} name='book' /> Devotional
    </NB.Text>
    </RN.TouchableOpacity>
    </NB.Box>

    <NB.Box  bg={{
        linearGradient: {
          colors: ['lightBlue.200', 'violet.300'],
          start: [0, 0],
          end: [1, 0],},
      }} ml='auto' borderRadius={6} mb={4} mx={2}  w='45%' >
    <RN.TouchableOpacity onPress={()=>navigation.navigate('Live stream') }>
    <NB.Text fontWeight='700' p={7} color='#124160'> 
    <Icon3 style={{marginBottom:15}} name='access-point' /> Livestream
    </NB.Text>
    </RN.TouchableOpacity>
    </NB.Box>

    </NB.HStack>
    
    <NB.HStack  mt={1}>
    <NB.Box bg={{
          linearGradient: {
          colors: ['lightBlue.200', 'violet.300'],
          start: [0, 0],
          end: [1, 0],},
      }}  borderRadius={6} my={4} mx={2} w='45%' >
    <RN.TouchableOpacity onPress={()=>RN.Alert.alert("Feature coming soon!") }>
    <NB.Text p={7} fontWeight='700' color='#124160' >
    <Icon style={{marginBottom:15}} name='bullhorn' /> Events
    </NB.Text>
    </RN.TouchableOpacity>
    </NB.Box>

    <NB.Box ml='auto' bg={{
          linearGradient: {
          colors: ['lightBlue.200', 'violet.300'],
          start: [0, 0],
          end: [1, 0],},
      }} borderRadius={6} my={4} mx={2} w='45%' >
    <RN.TouchableOpacity onPress={()=>navigation.navigate('Hymns',{screen:'_Hymns'}) }>
    <NB.Text p={7} fontWeight='700' color='#124160'>
    <Icon style={{marginBottom:15}} name='music' /> Hymn book
    </NB.Text>
    </RN.TouchableOpacity>
    </NB.Box>
    </NB.HStack>
    
    <NB.Divider mt={5} height={4} />
    
    <NB.Text fontFamily='Oswald' color='#1261a0'  borderRadius={10} fontSize={16} ml={1} my={3} p={1} pl={5} >
    <Icon name='chevron-right' /> ACTIVITIES
    </NB.Text>
    
    <NB.Divider mt={5} height={4} />
    
    <NB.Text color='#1261a0' fontFamily='Oswald' borderRadius={10} fontSize={16} ml={1} my={3} p={1} pl={5} >
    <Icon name='chevron-right' /> UPCOMING EVENTS
    </NB.Text>
    
    </NB.VStack>
    </NB.Box>
    </RN.View>
         )
  
}