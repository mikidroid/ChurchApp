import * as React from 'react';
import * as RN from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Config, please change dir when neccessary
import CONFIG from '../../config/config'
import COLORS from '../../config/colors'


    //Options auth
 export function _optionAuth(navigation,title){
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
             backgroundColor:COLORS.dark,
           },
           headerTintColor:COLORS.light,
           headerTitleStyle:{
           //  fontWeight:'bold',
             textAlign:'center'
           }}
        return options }