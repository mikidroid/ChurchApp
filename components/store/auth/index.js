import {createStore,thunk, computed,action } from 'easy-peasy';
import * as RN from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Register} from './register'
import {Login} from './login'
import {CheckAuth} from './check-auth'
import {Logout} from './logout'
import {FetchUser} from './fetch-user'

export default function index () {
  return{
  //Auth states
  auth:false,
  authChecking:false,
  adminAuth:false,
  user:{},
  subcribed:true,
  
  //Auth actions
  setAuth:action((state,payload)=>{
      state.auth=payload
  }),
  
  setAuthChecking:action((state,payload)=>{
      state.authChecking=payload
  }),
  
  setAdminAuth:action((state,payload)=>{
      state.adminAuth=payload
  }),
  
  setUser:action((state,payload)=>{
      state.user=payload
  }),
  
  //Auth thunks
  ...Register,
  ...Login,
  ...CheckAuth,
  ...Logout,
  ...FetchUser
}
}
