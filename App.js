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
          <Feather name="settings" size={24} color="grey" />
        </View>
        <View> 
          <Image source={Images.logo} style={{ width: 80, height: 30 }} /> 
        </View>
        <View>
          <Entypo name="chat" size={24} color="grey" />
        </View>  
      </View>

      <View style={styles.middle}>
      
        <Image source={Profiles.hosler} style={{ maxWidth: 290, height: 300 }} />   
        <View style={styles.profileText}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>

          <Text style={{fontSize: 24, paddingLeft: 10, fontWeight: 'bold'}}>Hosler,</Text>
          <Text style={{fontSize: 24, paddingLeft: 5}}>#7863</Text>

      </View>
        <Text style={{fontsize: 16, paddingLeft: 10, paddingBottom: 5, color: 'grey'}}>Arboretum</Text>
        </View>
      </View>

      <View style={styles.bottomAction}>
        <View style={styles.smallPic}>
          <Image source={Images.rewind} style={{width: 21, height: 25 }} /> 
        </View>
        <View style={styles.bigPic}>
          <Image source={Images.nope} style={{ width: 30, height: 30 }} /> 
        </View>
        <View style={styles.smallPic}>
          <Image source={Images.boost} style={{ width: 15, height: 30 }} /> 
        </View>
        <View style={styles.bigPic}>
          <Image source={Images.like} style={{ width: 36, height: 30 }} /> 
        </View>
        <View style={styles.smallPic}>
          <Image source={Images.superLike} style={{ width: 30, height: 27 }} /> 
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
    marginTop: 20,
  },

  middle: {
    marginLeft: 20,
    justifyContent: 'center',
    align: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
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
  },

  bigPic: {
    backgroundColor: 'white',
    border: 1,
    borderRadius: 200, 
    padding: 15,
  },
  smallPic: {
    backgroundColor: 'white',
    border: 1,
    borderRadius: 200, 
    paddingLeft: 10,
    paddingRight: 10, 
    paddingTop: 10, 
    paddingBottom: 0, 
   
  },
})