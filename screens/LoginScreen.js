import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BaseScreen from '../components/BaseScreen';
import BaseText from '../components/BaseText';
import Colors from '../constants/Colors';
import Blue from '../assets/images/Blue.svg';
import {TextInput} from 'react-native-paper';
import BaseButton from '../components/BaseButton';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const LoginScreen = function (props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailStateError, setEmailStateError] = useState(false);
  const [passwordStateError, setPaswordStateError] = useState(false);

  async function handleSubmit() {
    let emailError = false;
    let passwordError = false;
    try {
      if (!email || !email.includes('@')) {
        emailError = true;
      }
      if (!password || password.length < 8) {
        passwordError = true;
      }
      setEmailStateError(emailError);
      setPaswordStateError(passwordError);
      if (emailError || passwordError) {
        throw new Error('error');
      }
      const res = await axios({
        method: 'post',
        url: 'https://shoppyapp-backend.herokuapp.com/api/v1/users/login',
        data: {
          email,
          password,
        },
      });

      if (res.status != 200) {
        throw new Error('errr');
      }

      dispatch({
        type: '',
        status: true,
        email: res.email,
      });
      props.navigation.replace('MainStackScreen');
    } catch (err) {
      console.log('error');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={{backgroundColor: 'white'}}>
      <View style={styles.screen}>
        <Blue width={100} height={100} style={{marginBottom: 14}}></Blue>
        <Text
          style={{
            fontWeight: '700',
            textAlign: 'left',
            color: Colors.primaryColor,
            fontSize: 30,
            marginBottom: 30,
          }}>
          {props.language.language === 'Arabic'
            ? 'دخول'
            : props.language.language === 'French'
            ? 'Connexion'
            : 'Log in'}
        </Text>
        <View style={{flexDirection: 'column', width: '70%'}}>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            onChangeText={v => setEmail(v)}
            keyboardType="email-address"
            placeholder={
              props.language.language === 'Arabic'
                ? 'البريد الإلكتروني'
                : 'Email'
            }></TextInput>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            onChangeText={v => setPassword(v)}
            secureTextEntry={true}
            placeholder={
              props.language.language === 'Arabic'
                ? 'كلمه السر'
                : props.language.language === 'French'
                ? 'Mot de passe'
                : 'Password'
            }></TextInput>
          <BaseButton
            onPress={handleSubmit}
            width="100%"
            title={
              props.language.language === 'Arabic'
                ? 'دخول'
                : props.language.language === 'French'
                ? 'Se connecter'
                : 'Log in'
            }
            type="flat"></BaseButton>
          <BaseButton
            onPress={() => props.navigation.push('Reset Password')}
            width="100%"
            title={
              props.language.language === 'Arabic'
                ? 'نسيت كلمة المرور'
                : props.language.language === 'French'
                ? 'Mot de passe oublié ?'
                : 'Forget password ?'
            }
            type="ghost"></BaseButton>
        </View>
        <View style={{marginTop: 40}}>
          <BaseButton
            onPress={() => props.navigation.replace('Signup')}
            fontSize={15}
            width="50%"
            title={
              props.language.language === 'Arabic'
                ? 'تسجيل'
                : props.language.language === 'French'
                ? "S'inscrire"
                : 'Sign up'
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

export default LoginScreen;
