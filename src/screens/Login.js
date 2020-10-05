import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
      height: 40,
      fontSize: 18,
      width: '90%',
      borderColor: '#9b9b9b',
      borderBottomWidth: 1,
      marginTop: 8,
      marginVertical: 15,
    },
  });

  function handleLogin() {
    // TODO: Firebase stuff...
    console.log('handleLogin');
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User Signed in!');
        Alert.alert('Success ✅', 'Authentiated successfully');
        props.navigation.navigate('Dashboard');
      })
      .catch(error => {
        /* if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        } */
        setErrorMessage(error.message);
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#e93766', fontSize: 40, marginBottom: 20}}>
        Login
      </Text>
      {errorMessage && <Text style={{color: 'red'}}>{errorMessage}</Text>}
      <View style={{width: '90%', marginBottom: 40}}>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={emailTxt => setEmail(emailTxt)}
          value={email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={passwordTxt => setPassword(passwordTxt)}
          value={password}
        />
      </View>
      <Button title="Login" color="#e93766" onPress={() => handleLogin()} />
      <View style={{marginTop: 20, marginBottom: 40}}>
        <Text>
          {' '}
          Don't have an account?{' '}
          <Text
            onPress={() => props.navigation.navigate('SignUp')}
            style={{color: '#e93766', fontSize: 18}}>
            {' '}
            Sign Up{' '}
          </Text>
        </Text>
      </View>
    </View>
  );
}
