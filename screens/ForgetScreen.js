import React, {useState} from 'react';
import {View, StyleSheet, KeyboardAvoidingView} from 'react-native';

import Blue from '../assets/images/Blue.svg';
import {TextInput} from 'react-native-paper';
import BaseButton from '../components/BaseButton';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

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
      if (emailError) {
        throw new Error('error');
      }

      const res = await axios({
        method: 'post',
        url: 'https://shoppyapp-backend.herokuapp.com/api/v1/users/forget-password',
        data: {
          email,
        },
      });

      if (res.status != 200) {
        throw new Error('errr');
      }
      // dispatch({
      //   type: '',
      //   status: true,
      // });
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
            onChangeText={v => setEmail(v)}
            style={{
              marginBottom: 20,
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
