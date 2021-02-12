import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';

const ProfileView = (profile = {}) => {

  //const _height = Dimensions.get('window').height;

  return (
    <View style={styles.container}>

      <View style={styles.fixedRatio}>
        <Image style={styles.profilePic} source={profile.image} />   
        <View style={styles.profileText}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 24, paddingLeft: 10, fontWeight: 'bold'}}>{profile.name},</Text>
            <Text style={{fontSize: 24, paddingLeft: 5}}> {profile.id} </Text>
          </View>
        <Text style={{fontSize: 16, paddingLeft: 10, paddingBottom: 5, color: 'grey'}}>{profile.location}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  


  container: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    margin: 80,
    flex: 1,
    
    aspectRatio: 1,
  },
  fixedRatio: {
    aspectRatio: 1,
    flex: 1,
    
      
  },
  profilePic: {
    aspectRatio: 1,
    flex: 1,
  
  },
  profileText: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});

export default ProfileView;