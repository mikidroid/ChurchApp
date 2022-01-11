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
import Avatar from '../../assets/img/avatar.png'

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
    <NB.Box py={3} p={3} flex={1}>
    <NB.Image  alignSelf='center' alt='user' borderRadius={100} source={user.profile_pic?user.profile_pic:Avatar} size={150} />
    
    <NB.Text my={1} fontWeight={700} fontSize={20} textAlign='center'>
      {user.fullname?user.fullname:user.email}  ({user.username})
    </NB.Text>
    
    <NB.Text my={1} fontSize={17} textAlign='center'>
      {user.about? user.about : "This is your about section. tell us about yourself"}
    </NB.Text>
    
    <NB.Button onPress={()=>navigation.navigate('Edit profile')}>
    Edit profile
    </NB.Button>
    
    <NB.Divider my={4} height={2} />
    
    <NB.Text my={1} fontWeight={700} fontSize={20} >
     Basic information
    </NB.Text>

    <NB.Text my={1} fontSize={15} bold >
      Email - <NB.Text color='#216799' fontWeight='light'>{user.email}</NB.Text>
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
      Phone - <NB.Text color='#216799' fontWeight='light'>{user.phone}</NB.Text>
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
      Gender - <NB.Text color='#216799' fontWeight='light'>{user.gender}</NB.Text>
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
      State of origin - <NB.Text color='#216799' fontWeight='light'>{user.state}</NB.Text>
    </NB.Text>
    
    
    <NB.Text my={1} fontSize={15} >
     User type - <NB.Text color='#216799' fontWeight='light'> {user.level>1?'Editor':'Regular'} </NB.Text>
    </NB.Text>
    
    <NB.Divider my={3} height={2} />
    
    <NB.Text my={1} fontWeight={700} fontSize={20} >
     Church info
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
     Arm - <NB.Text color='#216799' fontWeight='light'> {user.arm}
     </NB.Text>
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
     Member type - <NB.Text color='#216799' fontWeight='light'> {user.arm}
     </NB.Text>
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
     Department -  <NB.Text color='#216799' fontWeight='light'>{user.department}
     </NB.Text>
    </NB.Text>
    
    <NB.Text my={1} fontSize={15} >
     Years active -  <NB.Text color='#216799' fontWeight='light'>{user.years_active}
     </NB.Text>
    </NB.Text>
    </NB.Box>
    </RN.View>
         )
  
}