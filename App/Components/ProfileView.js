import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
import { Images, Profiles } from '../Themes';

const ProfileView = (profile = {}) => {
    return (
     
      <View style={styles.profileCard}>
        <View style={{minHeight: 300, minWidth: 300}}>
          <ImageBackground style={styles.image} source={profile.image} />   
        </View>
        <View style={styles.profileText}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
            <Text style={{fontSize: 24, paddingLeft: 10, fontWeight: 'bold'}}>{profile.name},</Text>
            <Text style={{fontSize: 24, paddingLeft: 5}}> {profile.id} </Text>
          </View>
          <Text style={{fontSize: 16, paddingLeft: 10, paddingBottom: 5, color: 'grey'}}>{profile.location}</Text>
        </View>
    </View>
 
    )
}

const styles = StyleSheet.create({
    profileCard: {
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'grey',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: Dimensions.get('window').width * 0.05, 
    
      },
      image: {
        flex: 1, 
        resizeMode: 'cover', 
        justifyContent: 'center',
        minWidth: 300, 
        minHeight: 300, 
     

      },

      profileText: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }
});

export default ProfileView;