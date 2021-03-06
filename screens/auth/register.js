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

export default function register({route,navigation}){
  //States
  const {setLoading,setAuthChecking,register,checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading}=useStoreState(state=>state)
  const [email,setEmail] = React.useState()
  const [password,setPassword] = React.useState()
  const [username,setUsername] = React.useState()
  //Functions
  const _register=(()=>{
    if(!email && !password && !username)
    { RN.Alert.alert("Please provide details!")}

    else{
     const form = {
      email:email,
      password:password,
      username:username
    }
    register(form)}
  })
  
  
  return(
    <RN.View style={{flex:1}} >
    {  //Loading code
     loading && <Loading/>
    }
    <NB.Center flex={1} p={10}>
       <RE.Input
        placeholder='Username'
        onChangeText={(text)=>setUsername(text)}
        leftIcon={
          <Icon
            name='user'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
      <RE.Input
        placeholder='Email'
        onChangeText={(text)=>setEmail(text)}
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
      
      <RE.Button title="Register" 
          buttonStyle={{width:350, backgroundColor:COLORS.primary}}
          onPress={()=>{
           _register()
          
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
        Already registered?
       </NB.Text>
       <RN.TouchableOpacity
          onPress={()=>{
            navigation.navigate('_Login')
          }}>
       <NB.Text color={COLORS.primary}>
         Sign in
       </NB.Text>
       </RN.TouchableOpacity>
       </NB.HStack>
       
       <NB.HStack mt={5}>
       <NB.Text mr={1}>
        Register Parish
       </NB.Text>
       <RN.TouchableOpacity
          onPress={()=>{
            navigation.navigate('Register parish')
          }}>
       <NB.Text color={COLORS.primary}>
         Register
       </NB.Text>
       </RN.TouchableOpacity>
       </NB.HStack>
       
    </NB.Center>
    </RN.View>
    )
}


