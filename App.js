import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Images } from './App/Themes';
import { Profiles } from './App/Themes';
import { Feather } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export default function App() {

  

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

      <View style={styles.middle}>
        <Image style={styles.profilePic} source={Profiles.hosler.image} />   
        <View style={styles.profileText}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 24, paddingLeft: 10, fontWeight: 'bold'}}>Hosler,</Text>
            <Text style={{fontSize: 24, paddingLeft: 5}}>#7863</Text>
          </View>
        <Text style={{fontSize: 16, paddingLeft: 10, paddingBottom: 5, color: 'grey'}}>Arboretum</Text>
        </View>
      </View>

      <View style={styles.bottomAction}>
        <View style={[styles.smallPicView, {paddingTop: 8, paddingBottom: 8}]}>
          <Image source={Images.rewind} style={{height: 24, width: 21}} /> 
        </View>
        <View style={styles.bigPicView}>
          <Image source={Images.nope} style={{height: 30, width: 30}} /> 
        </View>
        <View style={[styles.smallPicView, {paddingBottom: 5, paddingTop: 5}]}>
          <Image source={Images.boost} style={{height: 31, width: 20}} /> 
        </View>
        <View style={[styles.bigPicView, {paddingLeft: 11, paddingRight: 11}]}>
          <Image source={Images.like} style={{height: 30, width: 36}} /> 
        </View>
        <View style={[styles.smallPicView, {paddingTop: 8, paddingBottom: 8}]}>
          <Image source={Images.superLike} style={{height: 25, width: 25}} /> 
        </View>
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

  middle: {
    
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 15, 
   
  },
  profilePic: {
    height: 300,
    width: 360, 
  
  },
  profileText: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
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