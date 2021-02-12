import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Images, Profiles } from '../Themes';

const ProfileView = (profile = {}) => {
    return (
        <View style={styles.middle}>
        <Image style={styles.profilePic} source={profile.image} />   
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
    middle: {
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: 15, 
        flex: 1, 
        aspectRatio: 1,
       
      },
      profilePic: {
        height: 300,
        width: 300, 
      
      },
      profileText: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }
});

export default ProfileView;