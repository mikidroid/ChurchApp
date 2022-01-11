import * as React from 'react';
import * as NB  from 'native-base';
import * as RN from 'react-native';
import * as RE from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
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
import axios from 'react-native-axios'

export default function Dashboard({navigation}){
  //Start values
  const {setLoading,setAuthChecking,fetchUser, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,user,auth,loading}=useStoreState(state=>state)
   const toast = NB.useToast()
  const [fullname,setFullname]=React.useState(user.fullname)
  const [phone,setPhone]=React.useState(user.phone)
  const [email,setEmail]=React.useState(user.email)
  const [state,setState]=React.useState(user.state)
  const [description,setDescription]=React.useState(user.description)
  const [arm,setArm]=React.useState(user.arm)
  const [member_type,setMember_type]=React.useState(user.member_type)
  const [department,setDepartment]=React.useState(user.department)
  const [years_active,setYears_active]=React.useState(user.years_active)
  const [gender,setGender]=React.useState(user.gender)
  const val4=""
  const val5=""
  
  //Use effect
  React.useEffect(()=>{
    
  return()=>{}
  },[])
  
  //Start commands
  const Toast=(title,desc,status,place)=>{
     
      toast.show({
       status:status,
       title:title,
       placement:place,
       description:desc
  })
  }
  
  const updateUser=()=>{
    const db = firebase.firestore()
    
  }
  
  //Main code
  return (
    <RN.View style={{flex:1}} >
    {  //Loading code
     loading && <Loading/>
    }
    <NB.Box mt={4} p={2} flex={1}>
    <RN.ScrollView>
      <RE.Input
        value={fullname}
        placeholder='Fullname'
        onChangeText={(text)=>setFullname(text)}
        leftIcon={
          <Icon3
            name='chevron-right'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
       <RE.Input
        value={description}
        multiline
        numberOfLines={4}
        placeholder='Introduce yourself'
        onChangeText={(text)=>setDescription(text)}
        leftIcon={
          <Icon3
            name='chevron-right'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
      <RE.Input
        placeholder='Email'
        value={email}
        keyboardType="email-address"
        onChangeText={(text)=>setEmail(text)}
        leftIcon={
          <Icon3
            name='chevron-right'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
     
      <RE.Input
        placeholder='Phone'
        value={phone}
        onChangeText={(text)=>setPhone(text)}
        keyboardType="numeric"
        leftIcon={
          <Icon3
            name='chevron-right'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
      <RE.Input
        value={state}
        placeholder='State of origin'
        onChangeText={(text)=>setState(text)}
        leftIcon={
          <Icon3
            name='chevron-right'
            size={18}
            color='black'
            style={{marginRight:5}}
          />
        }
      />
      
     <NB.Radio.Group
      name="RadioGroup"
      mx="2"
      value={gender}
      onChange={(nextValue) => {
        setGender(nextValue);
      }}
    >
      <NB.Radio value="Male" my="1">
        Male
      </NB.Radio>
      <NB.Radio value="Female" my="1">
        Female
      </NB.Radio>
    </NB.Radio.Group>
      
<NB.Select
        my={2}
        SelectedValue={member_type}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Member type..."
        _SelectedItem={{
          bg: "teal.600",
          endIcon: <Icon3 name='chevron-right' size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setMember_type(itemValue)}
      >
        <NB.Select.Item label="Rev." value="Rev." />
        <NB.Select.Item label="Pastor" value="Pastor" />
        <NB.Select.Item label="Eld." value="Eld." />
        <NB.Select.Item label="Bro." value="Bro." />
        <NB.Select.Item label="Sis." value="Sis." />
      </NB.Select>
      
           <NB.Select
        my={2}
        SelectedValue={department}
        minWidth="200"
        accessibilityLabel="Choose department"
        placeholder="Choose Your Department..."
        _SelectedItem={{
          bg: "teal.600",
          endIcon: <Icon3 name='chevron-right' size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setMember_type(itemValue)}
      >
        <NB.Select.Item label="Music department" value="Music department" />
        <NB.Select.Item label="Prayer band" value="Prayer band" />
        <NB.Select.Item label="Media" value="Media" />
      </NB.Select>
           
      
     <NB.Select
        my={2}
        SelectedValue={arm}
        minWidth="200"
        accessibilityLabel="Choose arm"
        placeholder="Choose Church Arm..."
        _SelectedItem={{
          bg: "teal.600",
          endIcon: <Icon3 name='chevron-right' size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setArm(itemValue)}
       >
      
        <NB.Select.Item label="MCA" value="MCA" />
        <NB.Select.Item label="Women's guild" value="Women's guild" />
        <NB.Select.Item label="PYPAN" value="PYPAN" />
        <NB.Select.Item label="CGIT" value="CGIT" />
      </NB.Select>
      
      <NB.Select
        my={2}
        SelectedValue={years_active}
        minWidth="200"
        accessibilityLabel="Choose years active"
        placeholder="Years active in church..."
        _SelectedItem={{
          bg: "teal.600",
          endIcon: <Icon3 name='chevron-right' size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setYears_active(itemValue)}
      >
      
        <NB.Select.Item label="1 year" value="1" />
        <NB.Select.Item label="2 or more years" value="2 or more" />
        <NB.Select.Item label="5 or more years" value="5 or more" />
        <NB.Select.Item label="10 or more years" value="10 or more" />
        <NB.Select.Item label="15 or more years" value="15 or more" />
        <NB.Select.Item label="30 or more years" value="30 or more" />
      </NB.Select>
      
      <RE.Button title="Update" 
          buttonStyle={{width:'100%', backgroundColor:COLORS.primary}}
          onPress={()=>{
           updateUser()
          
          }}
          icon={
          <Icon
            name='arrow-right'
            size={15}
            style={{marginRight:5,color:'#fff'}}
          />
        } />
    </RN.ScrollView>
    </NB.Box>
    </RN.View>
         )
  
}