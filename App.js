import React, {useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, 
  Button,
  TouchableOpacity
} from 'react-native';
import { Images } from './App/Themes';
import { Profiles } from './App/Themes';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import  ProfileView  from './App/Components/ProfileView';
export default function App() {

  const [profile, setProfile] = useState(profile)
  
  const prevProfiles = [];

  const [prevProfile, setPrevProfile] = useState(profile)

  

  return (
    
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View>
          <Feather name="settings" size={34} color="grey" />
        </View>
        <View> 
          <Image source={Images.logo} style={{ width: 120, height: 45 }} /> 
        </View>
        <View>
          <Entypo name="chat" size={34} color="grey" />
        </View>  
      </View>

      {ProfileView(profile)}

      <View style={styles.bottomAction}>
        <TouchableOpacity 
          style={[styles.smallPicView, {paddingTop: 8, paddingBottom: 8}]}
          onPress={() => setProfile(prevProfile)}
        >
          <Image source={Images.rewind} style={{height: 24, width: 21}} /> 
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.bigPicView}
          onPress = {() => {setPrevProfile(profile)}}
          onPress={() => setProfile(Profiles.random)}
        >
          <Image source={Images.nope} style={{height: 30, width: 30}} /> 
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.smallPicView, {paddingBottom: 5, paddingTop: 5}]}
          onPress = {() => {}}
        >
          <Image source={Images.boost} style={{height: 31, width: 20}} /> 
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bigPicView, {paddingLeft: 11, paddingRight: 11}]}
          onPress = {() => {setPrevProfile(profile)}}
          onPress={() => setProfile(Profiles.random)}
        >
          <Image source={Images.like} style={{height: 30, width: 36}} /> 
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.smallPicView, {paddingTop: 8, paddingBottom: 8}]}
          onPress = {() => {setPrevProfile(profile)}}
          onPress={() => setProfile(Profiles.random)}
        >
          <Image source={Images.superLike} style={{height: 25, width: 25}} 
          onPress = {() => {setPrevProfile(profile)}}
          onPress = {() => {setProfile(Profiles.random)}}
          
          /> 
        </TouchableOpacity>
       
        
      </View>


    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
    flexDirection: 'column',
    justifyContent: "space-around",
  },
  navbar: {
    flex: 1, 
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: 'grey',
    justifyContent: 'space-around',
    maxHeight: 56,
    paddingBottom: 0,
   
  
  },

  bottomAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10, 
    //borderWidth: 1,
    marginBottom: 0, 
  },

  bigPicView: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 60 * 0.5,
    padding: 14,
    
  },
  smallPicView: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 100 * 0.5, 
    padding: 10, 
    height: 44, 
    marginTop: 10,
    
  },
  
})