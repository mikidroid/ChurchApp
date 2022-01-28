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
import * as Location from 'expo-location'
//Config, please change dir when neccessary
import CONFIG from '../../components/config/config'
import COLORS from '../../components/config/colors'
//Custom core utilities
import Loading from '../core/loading.js'
import MapView from 'react-native-maps'
import axios from 'react-native-axios'
import * as geolib from 'geolib'
export default function Locations({navigation}){
  //Start values
  const {fetchLocation,setLoading,setAuthChecking, checkAuth}=useStoreActions(actions=>actions)
  const {adminAuth,auth,loading,location}=useStoreState(state=>state)
  const [lat,setLat]=React.useState()
  const [lng,setLng]=React.useState()
  const [region,setRegion] = React.useState({})
  const [data,setData] = React.useState([])
  const miles = 0.000621
  const toast = NB.useToast()
  //Use effect
  React.useEffect(()=>{
    setLoading(true)
    const lat = location.latitude
    const lng = location.longitude
    const type = CONFIG.PLACE_TYPE
    const place = CONFIG.CHURCHES_AROUND
    const radius = CONFIG.SEARCH_RADIUS
    const api = CONFIG.PLACES_API
    // must be specified as Lat, Long
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${place}&location=${lat}%2C${lng}&radius=${radius}&type=${type}&key=${api}`

    axios.get(url).then(r=>{
      let _data=[]
       r.data.results.forEach((doc)=>{
         let lati = doc.geometry.location.lat
         let lngi = doc.geometry.location.lng
         let geo = geolib.getDistance({latitude:lat,longitude:lng},{latitude:lati,longitude:lngi})
         _data.push({...doc,dist:geo})
 
       })
       _data.sort((a,b)=>a.dist - b.dist)
         setData(_data)
      //  setData(JSON.stringify(_data))

    })
        setLoading(false)
    

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
  
  const com2=()=>{
    
  }
  
  //Main code
  return (
    <RN.View style={{flex:1}} >
    {  //Loading code
     loading && <Loading/>
    }
    <NB.Box p={3} flex={1}>

<NB.HStack mb={4} mt={2}>

<NB.Button 
    rightIcon={<Icon3 color='cyan' name='chevron-right' size={20} />}
    leftIcon={<Icon3 color='cyan' name='run' size={20} />} 
    bg={COLORS.dark} 
    mr='2' 
    size='md' 
    variant='outline' 
    onPress={()=>{
      navigation.navigate
      ('Direction',
      {nav_lng:CONFIG.CHURCH_LNG,
       nav_lat:CONFIG.CHURCH_LAT,
       place_id:CONFIG.PLACE_ID
      })
    }}> 
  Our church direction
</NB.Button>

<NB.Button 
    rightIcon={<Icon3 color='cyan' name='chevron-right' size={20} />}
    leftIcon={<Icon3 color='cyan' name='bookmark' size={20} />} 
    bg={COLORS.dark} 
    mr='2' 
    size='md' 
    variant='outline' 
    onPress={()=>{
  navigation.navigate('Location details',{place_id:CONFIG.PLACE_ID})
    }}> 
 Details
</NB.Button>

</NB.HStack>
<RN.ScrollView>

<NB.Box
    bg={{
        linearGradient: {
          colors: ['lightBlue.200', 'violet.300'],
          start: [0, 0],
          end: [1, 0],},
       }}
      p="2"
      rounded="xl"
      _text={{
        fontSize: 'md',
        fontWeight: 'medium',
        color: 'warmGray.50',
        textAlign: 'center',
      }}>
      
<NB.Text p={2} fontSize={20}>
All {CONFIG.CHURCH_NAME} Churches around you
</NB.Text>
<NB.Text p={2}>
Located all {CONFIG.CHURCH_NAME} Churches around you sorted by nearest to farthest.
</NB.Text>
<NB.Text p={2}>
NOTE: You may check the DISTANCE just below the RATINGS.
</NB.Text>
</NB.Box>
<NB.Divider height={2} my={4} />

{
data.map((r,index)=>{
return (
<>
<NB.Text my={1} fontSize={18}>
{r.name}
</NB.Text>
<NB.Text my={1}>
{r.vicinity}
</NB.Text>
<NB.Text my={1} color='red.600'>
  Rating {r.rating}✴️
 </NB.Text>
<NB.Text py={1} bg='yellow.200:alpha.20' float='left'>
Distance: {r.dist*miles} miles
</NB.Text>
<NB.HStack>
<RN.TouchableOpacity onPress={()=>{
   navigation.navigate
   ('Location details',{place_id:r.place_id})
   }}>
<NB.Text py={2} pr={2}>
 Details  |
</NB.Text>
</RN.TouchableOpacity>

<RN.TouchableOpacity onPress={()=>{
   navigation.navigate
   ('Direction',
   {nav_lng:r.geometry.location.lng,
   nav_lat:r.geometry.location.lat,
   place_id:r.place_id
   })
   }}>
<NB.Text py={2} pr={2}>
 View directions
</NB.Text>
</RN.TouchableOpacity>
</NB.HStack>
<NB.Divider m={3}/>

</>
)
})
}

</RN.ScrollView>
    </NB.Box>
    </RN.View>
         )
  
}