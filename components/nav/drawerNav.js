import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/pages/home'
import Details from '../../screens/pages/details'
import Login from '../../screens/auth/login'
import AddTips from '../../screens/admin/add-tips'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import * as React from 'react';
import * as RN from 'react-native';
import * as NB from 'native-base';
import * as RE from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MainBottomNav,RootBottomNav} from './bottomTab.js'
import {useStoreState,useStoreActions} from 'easy-peasy'
import {LivestreamStack,DashboardStack,BaseStack,AuthStack}
from './stack-nav'
import AsyncStorage from '@react-native-async-storage/async-storage';
//Config, please change dir when neccessary
import CONFIG from '../../components/config/config'
import COLORS from '../../components/config/colors'

import {
  DrawerContentScrollView,
  DrawerItemList,DrawerItem
} from '@react-navigation/drawer';


export default function Drawer({navigation}){
  const accountBal=useStoreState((state)=>state.balance)
  const {adminAuth,auth,loading,user}=useStoreState(state=>state)
  const authToggle=useStoreActions((actions)=>actions.authToggle)
  const DrawerNav=createDrawerNavigator()
  const BottomTab = createBottomTabNavigator()

  const option=(title)=>{
        let header,options
        //if header title passed
        if(title){
          header=title
          options ={
           title:header,
           headerStyle:{
             backgroundColor:'#6515ea'
           },
           headerTintColor:'#fff',
           headerTitleStyle:{
             fontWeight:'bold'
           }}
        return options
        }
        //If no header title passed
        options ={
           headerStyle:{
             backgroundColor:'#6515ea'
           },
           headerTintColor:'#fff',
           headerTitleStyle:{
             fontWeight:'bold'
           }}
        return options }
  
  const DrawerContentCustom=({navigation})=>{
    const data = [
      {
      label:'Home',
      icon:'chevron-double-right',
      id:1,
      link:()=>navigation.navigate('Home'),
      },
      {
      label:'Pay tithe',
      icon:'chevron-double-right',
      id:2,
      link:()=>navigation.navigate('Pay tithe'),
      },
      {
      label:'PCN churches nearby',
      icon:'location',
      id:3,
      link:()=>navigation.navigate('Home',{screen:'Location'}),
      },
      {
      label:'Add livstream link',
      icon:'livestream',
      id:4,
      link:()=>navigation.navigate('Dashboard',{screen:'Add-livestream'})
      },
      {
      label:'About the church',
      icon:'about',
      id:5,
      link:()=>navigation.navigate('About'),
      },
      {
      label:'Contact',
      icon:'contact',
      id:6,
      link:()=>navigation.navigate('Contact'),
      },
      {
      label:'Dedication',
      icon:'chevron-double-right',
      id:7,
      link:()=>RN.Alert.alert('Dedication','This app is dedicated to my parents - Eld Chinny U. Kalu & Mrs Peace U. Kalu for their amazing support throughout my life.\n\nAlso, special appreciation to my siblings, Ezinne U. Uwbetine, Samuel Uche, Chichi Uche and Kaykay Uche.\n\n~ Mikidroid!'),
      },
    ]
    
    return (
    <DrawerContentScrollView >
    <NB.Box p={3}>
    <NB.Text color={COLORS.light} 
       fontSize='2xl'>
     {CONFIG.APP_TITLE}
    </NB.Text>
    <NB.Text color={COLORS.light} 
       fontSize='md'>
    Welcome back {user.username}
    </NB.Text>
        <NB.Text color={COLORS.light} 
       fontSize='sm'>
    Balance: ₦{accountBal}
    </NB.Text>
    </NB.Box>
       <RE.Button
       buttonStyle={{width:250,margin:5}}
       icon={{
       name: "arrow-right",
       size: 15,
       color: "white"
       }}
       title="Share App with friends"
       />
       
       { data.map((item,index)=>{
       return(
        <DrawerItem
        label={ ()=> (
        <NB.HStack>

        <NB.Text color={COLORS.light} >
         {item.label}
        </NB.Text>
        <NB.Box ml='auto'>
        <Icon2 name='chevron-right' color={COLORS.light} size={25}/>
        </NB.Box>
        </NB.HStack>
          ) }
          
        onPress={item.link}
         />
         )})
       }
       
       
       {/*
      <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >
        Home
        </NB.Text>
          )
        }
        onPress={()=>{
          
        }}
      />
      <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >             
        <Icon2
              name="chevron-double-right"
              color={COLORS.light}
              size={30}
              style={{marginBottom:15}}
         />  Pay tithe
        </NB.Text>
          )
        }
        onPress={()=>{
          
        }}
      />
       <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >
        {CONFIG.CHURCH_NAME} churches nearby
        </NB.Text>
          )
        }
        onPress={()=>{
          
        }}
      />
      {adminAuth &&
        <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >
        Add livestream
        </NB.Text>
          )
        }
        onPress={()=>{navigation.navigate('Dashboard',{screen:'Add-livestream'})}}
      /> }
      <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >
        About the church
        </NB.Text>
          )
        }
        onPress={()=>{
          
        }}
      />
      <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >
        Contact
        </NB.Text>
          )
        }
        onPress={()=>{
          
        }}
      />
      <DrawerItem
        label={ ()=> (
        <NB.Text color={COLORS.light} >
        Dedication
        </NB.Text>
          )
        }
        onPress={()=>{
          
        }}
      />
      */}
      
      <NB.Divider w='88%' justifyItem='center' mx={3} />
      <NB.Text 
          color='light.100:alpha.50' 
          mb='auto' 
          textAlign='center' mt={3} p={2}>
      Developed by • Mikidroid
      </NB.Text>
      <NB.Text 
          color='light.100:alpha.40' 
          fontSize={12}
          textAlign='center' 
          >
       View developer contact
      </NB.Text>
    </DrawerContentScrollView>
  );}
  
  
  
    return(
    <DrawerNav.Navigator 
      initialRouteName='Home'
      drawerContent={(props)=><DrawerContentCustom {...props}/>}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
        drawerTintColor:COLORS.light,
        backgroundColor: COLORS.dark,
        drawerActiveTintColor:'#ffadad',
        width: 300, }, }}
    >
    <DrawerNav.Screen name="Main-bottom" component={MainBottomNav} />
    </DrawerNav.Navigator>)
   
    
}