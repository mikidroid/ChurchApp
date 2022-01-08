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
import SearchInput, { createFilter } from 'react-native-search-filter';

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
  const [hymns,setHymns]=React.useState([])
  const [searchData,setSearchData] = React.useState('')
  const SEARCH_FILTER=['c0Id','c1title']
  const val5=""
  
  //Use effect
  React.useEffect(()=>{
   setLoading(true)
   setTimeout(function() {
     
   const hymn= hymnsJson
   const hymn2= hymn.filter(r=>{
     return r.c0Id <=100 
   })
   setHymns(hymn2)
   setLoading(false)
     
   }, 100);

  return()=>{}
  },[])
  
  //Start commands
  const search=(term)=>{
    const hymn= hymnsJson
    setHymns(hymn)
    const data =  hymn.filter(createFilter(term,SEARCH_FILTER))
    setHymns(data)
   
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
      mb={2}
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
   The Revised Church Hymnary
   </NB.Text>
   <NB.Text p={2}>
   Search for any Hymn by title or by RCH number.
   </NB.Text>
   </NB.Box>
    
    
    <SearchInput onChangeText={(term)=>{
      search(term)
    }} />
    

    <RN.FlatList
    data={hymns}
    keyExtractor={(item,index) => item.c0Id}
    renderItem={ ({item})=>
        { 
    return (
    <RN.ScrollView>
    
    <RN.TouchableOpacity onPress={()=>navigation.navigate('Hymn-details',{hymn:item})}>
    
    <NB.HStack  my={2} h={50}>
    <NB.Box borderWidth={1}  borderColor='#eb4' p={2} w={70} h={50}>
     <NB.Text color='#eb4' fontWeight={700} mt={-1} fontSize={12}>
      RCH  <Icon 
      name='book'
      size={10}
      style={{marginLeft:10}}
      />
     </NB.Text>
     <NB.Text color='#eb4' fontWeight={700} fontSize={14}>
      {item.c0Id}
     </NB.Text>
    </NB.Box>
    
    <NB.Box mt={-2} flex={1} p={2} h={50}>
    <NB.Text numberOfLines={1} ellipsizeMode={'tail'} fontSize={18}>
     {item.c1title}
    </NB.Text>
    
    <NB.Text fontSize={12}>
     {item.c1title}
    </NB.Text>
    </NB.Box>
    
    </NB.HStack>
    </RN.TouchableOpacity>
   
    </RN.ScrollView>
    )
}}

/>

    </NB.Box>
    </RN.View>
         )
  
}