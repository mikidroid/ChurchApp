import * as React from 'react';
import * as RN from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Config, please change dir when neccessary
import CONFIG from '../../config/config'
import COLORS from '../../config/colors'


//Options
export const _option=(navigation,title)=>{
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
             backgroundColor:COLORS.dark,
           },
           headerTintColor:COLORS.light,
        //   headerTintColor:'#fff',
           headerTitleStyle:{
            // fontWeight:'bold',
             fontFamily:'Oswald',
           }}
        return options }