
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
import AddTips from '../../screens/admin/add-tips'
import Register from '../../screens/auth/register'
import About from '../../screens/pages/about'
import Dashboard from '../../screens/user/dashboard'
import AdminDashboard from '../../screens/admin/dashboard'
import Profile from '../../screens/user/profile'
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

//Options
const option=(title)=>{
        let header,options
        //if header title passed
        if(title){
          header=title
          options ={
           title:header,
           headerStyle:{
             backgroundColor:COLORS.dark,
           },
            headerTintColor:COLORS.light,
           headerTitleStyle:{
           //  fontWeight:'bold',
             fontFamily:'Oswald',
             textAlign:'center'
           }}
        return options
        }
        //If no header title passed
        options ={
           headerStyle:{
          //   backgroundColor:'#6515ea',
     
           },
        //   headerTintColor:'#fff',
           headerTitleStyle:{
            // fontWeight:'bold',
             textAlign:'center'
           }}
        return options }
        
//AuthStack
export function AuthStack({navigation}){
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator>
      <Stack.Screen options={option()} name="_Login" component={Login}/>
      <Stack.Screen options={option()} name="Register" component={Register}/>
     </Stack.Navigator> 
     )}
     
//BaseStack
export function BaseStack({navigation}){
  
  //Const
  const {adminAuth,auth,loading}=useStoreState(state=>state)
 
     //Options auth
   const optionAuth=(title)=>{
        let header,options
        //if header title passed
        if(title){
          header=title
          options ={
           headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.navigate('Dashboard',{screen:'Profile'})}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="chevron-down"
              color={COLORS.light}
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           title:header,
           headerStyle:{
             backgroundColor:COLORS.dark,
           },
             headerTintColor:COLORS.light,
           headerTitleStyle:{
          //   fontWeight:'bold',
             textAlign:'center'
           }}
        return options
        }
        //If no header title passed
        options ={
            headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.navigate('Dashboard',{screen:'Profile'})}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
          headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="chevron-down"
              color={COLORS.light}
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           headerStyle:{
          //   backgroundColor:'#6515ea'
           },
     //      headerTintColor:'#fff',
           headerTitleStyle:{
           //  fontWeight:'bold',
             textAlign:'center'
           }}
        return options }
        
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator screenOptions={{
          headerShadowVisible: false
        }}>
      <Stack.Screen options={auth? optionAuth(CONFIG.APP_TITLE) : option(CONFIG.APP_TITLE)} name="_Home" component={Home}/>
      <Stack.Screen options={option()} name="Details" component={Details}/>
      <Stack.Screen options={option()} name="About" component={About}/>
      <Stack.Screen options={auth? optionAuth() : option()} name="Location" component={Location}/>
      <Stack.Screen options={auth? option() : option()} name="Location details" component={LocationDetails}/>
      <Stack.Screen options={auth? option() : option()} name="Direction" component={Direction}/>
     </Stack.Navigator> 
     )}
     
//Dashboard
export function DashboardStack({navigation}){
  
   //Options auth
   const optionAuth=(title)=>{
        let header,options
        //if header title passed
        if(title){
          header=title
          options ={
           headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.navigate('Dashboard',{screen:'Profile'})}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
            headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="bars"
              color="#222"
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           title:header,
           headerStyle:{
        //     backgroundColor:'#6515ea'
           },
       //    headerTintColor:'#fff',
           headerTitleStyle:{
          //   fontWeight:'bold',
             textAlign:'center'
           }}
        return options
        }
        //If no header title passed
        options ={
           headerRight: () => (
           <RN.TouchableOpacity
              onPress={() => {navigation.navigate('Dashboard',{screen:'Profile'})}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
          headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="bars"
              color="#222"
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           headerStyle:{
       //      backgroundColor:'#6515ea'
           },
        //   headerTintColor:'#fff',
           headerTitleStyle:{
           //  fontWeight:'bold',
             textAlign:'center'
           }}
        return options }
        
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator>
      <Stack.Screen options={(props)=>optionAuth('Dashboard')} name="_Dashboard" component={Dashboard}/>
      <Stack.Screen options={optionAuth()} name="Add-devotional" component={AddDevotional}/>
      <Stack.Screen options={optionAuth()} name="Add-announcement" component={AddAnnouncement}/>
      <Stack.Screen options={optionAuth()} name="Add-advert" component={AddAdvert}/>
      <Stack.Screen options={option()} name="Add-livestream" component={AddLivestream}/>
      <Stack.Screen options={optionAuth()} name="Profile" component={Profile}/>
      <Stack.Screen options={optionAuth()} name="Admin dashboard" component={AdminDashboard}/>
     </Stack.Navigator> 
     )}
     
//Livestream
export function LivestreamStack({navigation}){
   //Options auth
   const optionAuth=(title)=>{
        let header,options
        //if header title passed
        if(title){
          header=title
          options ={
           headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
            headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="bars"
              color="#222"
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           title:header,
           headerStyle:{
       //      backgroundColor:'#6515ea'
           },
      //     headerTintColor:'#fff',
           headerTitleStyle:{
           //  fontWeight:'bold',
             textAlign:'center'
           }}
        return options
        }
        //If no header title passed
        options ={
           headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
          headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="bars"
              color="#222"
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           headerStyle:{
        //     backgroundColor:'#6515ea'
           },
        //   headerTintColor:'#fff',
           headerTitleStyle:{
           //  fontWeight:'bold',
             textAlign:'center'
           }}
        return options }
        
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator>
      <Stack.Screen options={optionAuth('Live stream')} name="_Live stream" component={LiveStream}/>
      <Stack.Screen options={option('Watch stream')} name="Livestream-details" component={LivestreamDetails}/>
     </Stack.Navigator> 
     )}
     
     
  //Hymn stack
  export function HymnStack({navigation}){
  
  //Const
  const {adminAuth,auth,loading}=useStoreState(state=>state)
 
     //Options auth
   const optionAuth=(title)=>{
        let header,options
        //if header title passed
        if(title){

          header=title
          options ={
           headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
            headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="bars"
              color="#222"
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           title:header,
           headerStyle:{
         //    backgroundColor:'#6515ea'
           },
       //    headerTintColor:'#fff',
           headerTitleStyle:{
            // fontWeight:'bold',
             textAlign:'center'
           }}
        return options
        }
        //If no header title passed
        options ={
           headerRight: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon2
              name="account-circle"
              color={COLORS.light}
              size={30}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
          headerLeft: () => (
            <RN.TouchableOpacity
              onPress={() => {navigation.toggleDrawer()}}>
            <Icon
              name="bars"
              color="#222"
              size={20}
              style={{marginRight:15}}
            />
            </RN.TouchableOpacity>
          ),
           headerStyle:{
         //    backgroundColor:'#6515ea'
           },
        //   headerTintColor:'#fff',
           headerTitleStyle:{
            // fontWeight:'bold',
             textAlign:'center'
           }}
        return options }
        
   const Stack = createNativeStackNavigator()
   return(
     <Stack.Navigator >
      <Stack.Screen options={auth? optionAuth('Hymns') : option('Hymns')} name="_Hymns" component={HymnList}/>
      <Stack.Screen options={auth? option('Details') : option('Details')} name="Hymn-details" component={HymnDetails}/>
     </Stack.Navigator> 
      
     )}