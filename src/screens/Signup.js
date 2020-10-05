/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    fontSize: 18,
    width: '90%',
    borderColor: '#9b9b9b',
    borderBottomWidth: 1,
    marginTop: 8,
    marginVertical: 15,
  },
});

export default function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  function handleSignUp() {
    // TODO: For Firebase athu
    console.log('handleSignUp');
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log('User account created & signed in!');
        const uid = response.user.uid;
        database()
          .ref('/users/' + uid)
          .set({name: name})
          .then(() => {
            Alert.alert('Success ✅', 'Account created successfully');
            props.navigation.navigate('Dashboard');
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        setErrorMessage(error.message);
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#e93766', fontSize: 40, marginBottom: 20}}>
        Sign Up
      </Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <View style={{width: '90%', marginBottom: 40}}>
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={nameTxt => setName(nameTxt)}
          value={name}
          keyboardType="default"
        />
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={emailTxt => setEmail(emailTxt)}
          value={email}
          keyboardType="email-address"
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={passwordTxt => setPassword(passwordTxt)}
          value={password}
        />
      </View>
      <Button title="Sign Up" color="#e93766" onPress={() => handleSignUp()} />
      <View style={{marginTop: 20, marginBottom: 40}}>
        <Text>
          {' '}
          Already have an account?{' '}
          <Text
            onPress={() => props.navigation.navigate('Login')}
            style={{color: '#e93766', fontSize: 18}}>
            {' '}
            Login{' '}
          </Text>
        </Text>
      </View>
    </View>
  );
}
