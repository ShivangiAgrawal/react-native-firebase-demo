/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import auth from '@react-native-firebase/auth';

function Splash() {
  // Handle user state changes
  function onAuthStateChanged(user) {
    if (!user) {
      setTimeout(() => {
        NavigationService.navigate('Signup');
      }, 1000);
    } else {
      setTimeout(() => {
        NavigationService.navigate('Dashboard');
      }, 1000);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={styles.splashMainContainer}>
      <Image
        style={styles.splashImage}
        source={require('../res/images/splashImg.png')}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});

export default Splash;
