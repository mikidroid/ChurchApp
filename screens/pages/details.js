import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import  * as n  from 'native-base';
import img from '../../files/img1.jpg'
import { StyleSheet,ActivityIndicator, TouchableOpacity, Text,Alert,Button,Image,KeyboardAvoidingView,ScrollView, View} from 'react-native';
import {useStoreState,useStoreActions} from 'easy-peasy'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Details() {
  
  let [name,setName]=React.useState()
  let [f,setf]=React.useState()
  let [data,setData]=React.useState([])
  let [age,setAge]=React.useState()
  let [loading,setLoading]=React.useState(false)
  const tips=useStoreState((state)=>state.tips)
  const dat=useStoreState((actions)=>actions.Tips)
  const fetchTips=useStoreActions((actions)=>actions.tips)
  const fetchBooks=useStoreActions((actions)=>actions.fetchBooks)
    
    
  React.useEffect(()=>{

     if(tips==""){
    fetchP()}
    return ()=>unsubscribe() 

  },[])
  
 const fetchP=async()=>{
    setLoading(true)
  const db = firebase.firestore();
  const unsubscribe=await db.collection('users').orderBy('name').get().then((snapshot) => {
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
     fetchTips(postData);
     setLoading(false)
    });
  }

if(loading){
  return (
<ActivityIndicator color={'#999'} />)}

  return (
  
    <KeyboardAvoidingView>
    <ScrollView>
<>

  <n.Box h={240}>
  <n.Image
      source={{
        uri: "https://wallpaperaccess.com/full/317501.jpg",
      }}
      alt="Alternate Text"
      resizeMode="cover"
      size="100%"
       /></n.Box>
       <Text>{f}</Text>
       <n.Box p={5}>
       {tips.map((item,index)=>{
         return(
         <>
         <TouchableOpacity>
          <n.HStack>
          <n.Text>
          Name:
          </n.Text>
          <n.Text>
          {item.name}
          </n.Text>
          </n.HStack>
          
          <n.HStack>
          <n.Text>
          Age:
          </n.Text>
          <n.Text>
          {item.age}
          </n.Text>
          </n.HStack>
          
          <n.HStack>
          <n.Text>
          {item.date}
          </n.Text>
          </n.HStack>
    <Button
       title="delete"
       onPress={async()=>{
        await firebase.firestore().collection('users').doc(item.id).delete()
         fetchP()
         Alert.alert("Done!",item.name+" deleted")
         
       }}
       ></Button>

          </TouchableOpacity>
          </>
       ) })}
       </n.Box>

    <Text style={{color:"#767676",marginLeft:10,fontSize:15}}> Name</Text>
    
      <n.Input
         mx="3"
         variant="rounded"
         onChangeText={(e)=>setName(e)}
          value={name}
          w={{
            base: "75%",
            md: "25%",
          }}/>
          
    <Text style={{color:"#767676",marginLeft:10,fontSize:15}} > Age</Text>
          
      <n.Input
         mx="3"
         variant="rounded"
         onChangeText={(e)=>{
         setAge(e)}}
        value={age}
          w={{
            base: "75%",
            md: "25%",
          }}/>
          
    <Button
       title="Add user"
       onPress={async()=>{
        await firebase.firestore().collection('users').add({
           name:name,
           age:age,
           date:Date.now()
         })
         fetchP()
         
       }}
       ></Button>
    </>
    </ScrollView>
    </KeyboardAvoidingView>

  );
}




