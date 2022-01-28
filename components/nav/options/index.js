import * as React from 'react';
import * as RN from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Config, please change dir when neccessary
import CONFIG from '../../config/config'
import COLORS from '../../config/colors'
import {_option} from './options'
import {_optionAuth} from './optionsAuth'

//Options
export function option(navigation,title){
  return _option(navigation,title)
}

//Options Auth
export function optionAuth(navigation,title){
 return  _optionAuth(navigation,title)
}