
import * as React from 'react';
import * as RN from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Config, please change dir when neccessary
import CONFIG from '../config/config'
import COLORS from '../config/colors'

import Home from '../../screens/pages/home'
import Details from '../../screens/pages/details'
import Login from '../../screens/auth/login'
import RegisterParish from '../../screens/auth/register-parish'
import AddTips from '../../screens/admin/add-tips'
import Register from '../../screens/auth/register'
import About from '../../screens/pages/about'
import Dashboard from '../../screens/user/dashboard'
import Payment from '../../screens/payment/payment'
import AdminDashboard from '../../screens/admin/dashboard'
import Profile from '../../screens/user/profile'
import EditProfile from '../../screens/user/edit-profile'
import Deposit from '../../screens/user/deposit'
import AddAdvert from '../../screens/admin/add-advert'
import AddLivestream from '../../screens/admin/add-livestream'
import AddDevotional from '../../screens/admin/add-devotional'
import AddAnnouncement from '../../screens/admin/add-announcement'
import LocationDetails from '../../screens/location/location-details'
import Location from '../../screens/location/location'
import Direction from '../../screens/location/direction'
import {useStoreState,useStoreActions} from 'easy-peasy'
import HymnList from '../../screens/hymn/hymn-list'
import HymnDetails from '../../screens/hymn/hymn-details'
import LiveStream from '../../screens/livestream/livestreams'
import LivestreamDetails from '../../screens/livestream/livestream-details'
import {optionAuth,option} from './options'


 //AuthStack
 export function AuthStack({navigation}){
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator>
      <Stack.Screen options={option(navigation,'Login')} name="_Login" component={Login}/>
      <Stack.Screen options={option(navigation)} name="Register" component={Register}/>
      <Stack.Screen options={option(navigation,'Register Parish')} name="Register parish" component={RegisterParish}/>
     </Stack.Navigator> 
     )}
     
  //BaseStack
  export function BaseStack({navigation}){
  //Const
   const {adminAuth,auth,loading}=useStoreState(state=>state)
        
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator screenOptions={{
          headerShadowVisible: false
        }}>
      <Stack.Screen options={auth? optionAuth(navigation,CONFIG.APP_TITLE) : option(navigation,CONFIG.APP_TITLE)} name="_Home" component={Home}/>
      <Stack.Screen options={option(navigation)} name="Details" component={Details}/>
      <Stack.Screen options={option(navigation)} name="About" component={About}/>
      <Stack.Screen options={auth? optionAuth(navigation) : option(navigation)} name="Location" component={Location}/>
      <Stack.Screen options={auth? option(navigation) : option(navigation)} name="Location details" component={LocationDetails}/>
      <Stack.Screen options={auth? option(navigation) : option(navigation)} name="Direction" component={Direction}/>
     </Stack.Navigator> 
     )}
     
  //Dashboard
  export function DashboardStack({navigation}){
  
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator>
      <Stack.Screen options={(props)=>optionAuth(navigation,'Dashboard')} name="_Dashboard" component={Dashboard}/>
      <Stack.Screen options={optionAuth(navigation)} name="Add-devotional" component={AddDevotional}/>
      <Stack.Screen options={optionAuth(navigation)} name="Add-announcement" component={AddAnnouncement}/>
      <Stack.Screen options={optionAuth(navigation)} name="Add-advert" component={AddAdvert}/>
      <Stack.Screen options={option(navigation)} name="Add-livestream" component={AddLivestream}/>
      <Stack.Screen options={optionAuth(navigation)} name="Profile" component={Profile}/>
      <Stack.Screen options={option(navigation)} name="Edit profile" component={EditProfile}/>
      <Stack.Screen options={optionAuth(navigation)} name="Admin dashboard" component={AdminDashboard}/>
      <Stack.Screen options={optionAuth(navigation,'Give to God')} name="Payment" component={Payment}/>
     </Stack.Navigator> 
     )}
     
  //Livestream
  export function LivestreamStack({navigation}){
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator>
      <Stack.Screen options={optionAuth(navigation,'Live stream')} name="_Live stream" component={LiveStream}/>
      <Stack.Screen options={option(navigation,'Watch stream')} name="Livestream-details" component={LivestreamDetails}/>
     </Stack.Navigator> 
     )}
     
  //Hymn stack
  export function HymnStack({navigation}){
  //Const
  const {adminAuth,auth,loading}=useStoreState(state=>state)
            
  const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator >
      <Stack.Screen options={auth? optionAuth(navigation,'Hymns') : option(navigation,'Hymns')} name="_Hymns" component={HymnList}/>
      <Stack.Screen options={auth? option(navigation,'Details') : option(navigation,'Details')} name="Hymn-details" component={HymnDetails}/>
     </Stack.Navigator> 
     )}