import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';

import Blue from '../assets/images/Blue.svg';
import {TextInput} from 'react-native-paper';
import BaseButton from '../components/BaseButton';
import {useSelector, useDispatch} from 'react-redux';

const ForgetScreen = function (props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [emailStateError, setEmailStateError] = useState(false);
  async function handleSubmit() {
    let emailError = false;
    try {
      if (!email || !email.includes('@')) {
        emailError = true;
      }

      setEmailStateError(emailError);
      if (emailError || passwordError) {
        throw new Error('error');
      }
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAhMHIC_IVXX0deef5sMnqrOnN617B0rmc`,
        {
          method: 'POST',
          header: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({email}),
        },
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error('errr');
      }
      dispatch({
        type: '',
        status: true,
        email: data.email,
        tokenId: data.idToken,
      });
      props.navigation.push('MainStackScreen');
    } catch (err) {
      console.log('error');
    }
  }
  return (
    <KeyboardAvoidingView
      style={{backgroundColor: 'white'}}
      behavior="position">
      <View style={styles.screen}>
        <Blue width={100} height={100} style={{marginBottom: 14}}></Blue>
        <View style={{flexDirection: 'column', width: '70%'}}>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
            }}
            keyboardType="email-address"
            placeholder="Email"></TextInput>

          <BaseButton width="100%" title="Reset" type="flat"></BaseButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});

export default ForgetScreen;
