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
import Loading from '../core/loading.js'

export default function login({route,navigation}){
  
  const {setLoading,setAuthChecking,login, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading}=useStoreState(state=>state)
  const [email,setEmail] = React.useState()
  const [password,setPassword] = React.useState()
  
  //Functions
  const _login=(()=>{
    if(!email && !password)
    { RN.Alert.alert("Please provide details!")}

    else{
     const form = {
      email:email,
      password:password,
    }
    login(form)}
  })
  

  
  return(
    <RN.View style={{flex:1}} >
    {  //Loading code
     loading && <Loading/>
    }
    <NB.Center flex={1} p={10}>
      <RE.Input
        onChangeText={(text)=>setEmail(text)}
        placeholder='Email'
        leftIcon={
          <Icon
            name='envelope'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
      <RE.Input
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={(text)=>setPassword(text)}
        leftIcon={
          <Icon
            name='lock'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
      <RE.Button title="Login" 
          buttonStyle={{width:350, backgroundColor:COLORS.primary}}
          onPress={()=>{
           _login()
          }}
          icon={
          <Icon
            name='arrow-right'
            size={15}
            style={{marginRight:5,color:'#fff'}}
          />
        } />
        <NB.HStack mt={5}>
        <NB.Text mr={1}>
        Not registered?
        </NB.Text>
       <RN.TouchableOpacity
          onPress={()=>{
            navigation.navigate('Register')
          }}>
        <NB.Text color={COLORS.primary}>
         Sign up
        </NB.Text>
       </RN.TouchableOpacity>
       </NB.HStack>
    </NB.Center>
    </RN.View>
    )
}


