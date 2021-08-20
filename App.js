import React from 'react';
import { Text,View } from 'react-native';
import SignupLogin from './screens/SignupLogin.js';
import firebase from 'firebase';

export default function App(){
  return(
    <View>
      <SignupLogin/>
    </View>
  )
}
