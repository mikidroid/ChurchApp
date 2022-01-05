import * as React from 'react';
import * as Battery from 'expo-battery';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Center,Box} from 'native-base';
import {useStoreState,useStoreActions} from 'easy-peasy'

export default function App(){
  const [batteryLevel,setBatt]=React.useState('')
const [data,setData]=React.useState('')
const Posts = useStoreState((state)=>state.todos)
const da = useStoreState((state)=>state.posts.data)
const d=[33,42,21]
let sub2,c;
  React.useEffect(()=>{
    _subscribe();
    
  });



   async function _subscribe(){
    const batt =await Battery.getBatteryLevelAsync();
    setBatt(batt);
    
    
   let sub = Battery.addBatteryLevelListener(( {batty }) => {
      setBatt({ batty} );
  })
   }

    return (
      <Center >
      hey hey 
      <View>
      {da.map((item,index)=>{return (<Text>hggj {item}</Text>)})}
      </View>
      </Center>
    );
  
}
