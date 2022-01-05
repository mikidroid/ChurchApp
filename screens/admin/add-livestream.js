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

export default function AddLivestream({navigation}){
  //Start values
  const {addLivestream,setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {user,adminAuth,auth,loading}=useStoreState(state=>state)
  const [title,setTitle] = React.useState('')
  const [link,setLink] = React.useState('')
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
       {user.username}
      </NB.Text>
      <RE.Input
        onChangeText={(text)=>setTitle(text)}
        placeholder='Title'
      />
      
      <RE.Input
        onChangeText={(text)=>setLink(text)}
        placeholder='Link'
        leftIcon={
          <Icon
            name='link'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
      <RE.Button 
        title="Add link"
        onPress={async()=> {
        if(title && link != ''){
        let data = {title:title,link:link}
        await addLivestream(data)
        navigation.navigate('Home')}
        else{
        RN.Alert.alert("🚫 Error","Fill in all details")}
        }}
        />
        
      <RE.Button 
        buttonStyle={{marginTop:10}}
        title="Go back"
        onPress={()=> {
        navigation.navigate('Home')
        
        }}
        />
    
    </NB.Box>
    </RN.View>
         )
  
}