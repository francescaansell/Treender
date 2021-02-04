import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Images, Profiles } from './App/Themes';
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
        <Image source={Images.like} style={{ width: 200, height: 300 }} /> 
      </View>

      <View style={styles.bottomAction}>
        <View>
          <Image source={Images.rewind} style={{ width: 30, height: 30 }} /> 
        </View>
        <View>
          <Image source={Images.nope} style={{ width: 30, height: 30 }} /> 
        </View>
        <View>
          <Image source={Images.boost} style={{ width: 20, height: 40 }} /> 
        </View>
        <View>
          <Image source={Images.nope} style={{ width: 30, height: 30 }} /> 
        </View>
        <View>
          <Image source={Images.like} style={{ width: 30, height: 30 }} /> 
        </View>
        <View>
          <Image source={Images.superLike} style={{ width: 30, height: 30 }} /> 
        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    flex: 1,
    flexDirection: 'column',
  },
  navbar: {
    flex: 1, 
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'space-around',
    height: '56',
  },

  middle: {
    marginBottom: 250,
    marginTop: 200,
    marginLeft: 20,
    justifyContent: 'center',
    align: 'center',
    borderWidth: 1,
    bordercolor: 'grey',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 300,
  },
  bottomAction: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
  },
 
})