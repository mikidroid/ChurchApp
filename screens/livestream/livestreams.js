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
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';


//Config, please change dir when neccessary
import CONFIG from '../../components/config/config'
import COLORS from '../../components/config/colors'
//Custom core utilities
import Loading from '../core/loading.js'
import embed from '../core/embed.js'

export default function Livestreams({navigation}){
  //Start values
  const {fetchLivestreams,setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {livestreams,adminAuth,auth,loading}=useStoreState(state=>state)
  const val5=[{title:'big',link:'https://wapking.com',id:1},{title:'small',link:'https://pcnapapa.com',id:2}]
  
  
  //Use effect
  React.useEffect(()=>{
    fetchLivestreams()
  return()=>{
    fetchLivestreams()
  }
  },[])
  
  //Start commands
  const formatDate=(payload)=>{
    let _toDate = payload.toDate()
    let _toLocale = _toDate.toLocaleTimeString()
     _toDate = _toDate.toDateString()
     return _toDate +' at '+ _toLocale
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
    
    <NB.Image alt='livestream-pic' ml={3} source={require('../../assets/livestream.png')} itemAlign='center' size={100} />
  
    <RN.FlatList 
      data={livestreams}
      keyExtractor={(item)=>item.id}
      renderItem={({item,index})=>{
        return (
        <RN.ScrollView>
        {index ==0 && 
         <>
         <NB.Text p={2} ml={2} fontSize={15}>
          New broadcast
         </NB.Text>
         </>
        }
        
        {index ==1 && 
      
         <NB.Text p={2} ml={2} fontSize={15}>
          Older broadcast
         </NB.Text>
        }
         <RN.TouchableOpacity onPress={()=>
            navigation.navigate('Livestream-details',{item:item})
         }>
         <NB.HStack p={4}>
         <NB.Image alt='livestream-icon' mt={2.5} mr={3} source={require('../../assets/livestream-icon.png')} size={7} />
         <NB.VStack>
         <NB.Text fontSize={18}>
         {item.title}
         </NB.Text>
         <NB.Text color='#989898' >
         {
          formatDate(item.created_at)
         }
         </NB.Text>
         </NB.VStack>
         <NB.Box mt={4} ml='auto'>
         <Icon name='chevron-right' style={{fontWeight:100,color:'#989898'}} size={15} />
         </NB.Box>
         </NB.HStack>
         </RN.TouchableOpacity>
         {
           index ==0 &&
           <NB.Divider mb={5} h={1}/>
         }
        </RN.ScrollView>
        )
      }}
    />
       
    </NB.Box>
    </RN.View>
         )
  
}