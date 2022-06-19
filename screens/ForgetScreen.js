import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Linking,
  Text,
  Alert,
} from 'react-native';

import Blue from '../assets/images/Blue.svg';
// import {TextInput} from 'react-native-paper';
import BaseButton from '../components/BaseButton';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

const ForgetScreen = function (props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [emailStateError, setEmailStateError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit() {
    setIsLoading(true);
    let emailError = false;
    try {
      if (!email || !email.includes('@')) {
        emailError = 'Please enter a valid email';
      }

      if (emailError) {
        throw new Error(emailError);
      }

      const res = await fetch(
        'http://192.168.42.83:3000/api/v1/users/forget-password',
        {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email,
          }),
        },
      );
      const data = await res.json();

      // const res = await axios({
      //   method: 'post',
      //   url: 'http://192.168.42.83:3000/api/v1/users/forget-password',
      //   // url: 'https://shoppyapp-backend.herokuapp.com/api/v1/users/forget-password',
      //   data: {
      //     email,
      //   },
      // });

      if (res.status != 200) {
        throw new Error('Log in failed ' + data.error + ' ' + data.statusCode);
      }
      Alert.alert('Email is sent successfully', '', [
        {
          text: 'OK',
          onPress: () => props.navigation.replace('Login'),
        },
      ]);
    } catch (err) {
      setEmailStateError(emailError);
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
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
            onChangeText={v => setEmail(v)}
            style={{
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            keyboardType="email-address"
            placeholder={
              props.language.language === 'Arabic'
                ? 'البريد الإلكتروني'
                : 'Email'
            }></TextInput>
          {emailStateError !== '' && (
            <Text style={{color: 'red'}}>{emailStateError}</Text>
          )}
          <View style={{marginTop: 20}}>
            {isLoading ? (
              <BaseButton
                onPress={() => {
                  return;
                }}
                width="100%"
                title=". . ."
                type="flat"></BaseButton>
            ) : (
              <BaseButton
                onPress={handleSubmit}
                width="100%"
                title={
                  props.language.language === 'Arabic'
                    ? 'إرسال'
                    : props.language.language === 'French'
                    ? 'Confirmer'
                    : 'Submit'
                }
                type="flat"></BaseButton>
            )}
          </View>
          <BaseButton
            onPress={() => props.navigation.replace('Login')}
            width="100%"
            title={
              props.language.language === 'Arabic'
                ? 'دخول'
                : props.language.language === 'French'
                ? 'Connexion'
                : 'Log in'
            }
            type="ghost"></BaseButton>
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
