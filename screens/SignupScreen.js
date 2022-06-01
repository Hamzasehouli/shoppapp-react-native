import React, {useState} from 'react';
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

const SignupScreen = function (props) {
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
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
      // setEmailStateError(emailError);
      // setPaswordStateError(passwordError);
      // if (emailError || passwordError) {
      //   throw new Error('error');
      // }
      console.log({
        name,
        email,
        password,
        confirmPassword,
      });
      const res = await axios({
        method: 'post',
        url: 'https://shoppyapp-backend.herokuapp.com/api/v1/users/register',
        data: {
          name,
          email,
          password,
          confirmPassword,
        },
      });
      // const res = await fetch(
      //   `https://shoppyapp-backend.herokuapp.com/api/v1/users/register`,
      //   {
      //     method: 'POST',
      //     header: {
      //       'Content-type': 'application/json',
      //     },
      //     body: JSON.stringify({
      //       name,
      //       email,
      //       password,
      //       confirmPassword,
      //     }),
      //   },
      // );

      if (res.status != 201) {
        console.log(res.status);
        throw new Error('errr');
      }
      dispatch({
        type: '',
        status: true,
        email: res.email,
      });
      props.navigation.replace('MainStackScreen');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{backgroundColor: 'white'}}
      behavior="position">
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
            ? 'تسجيل'
            : props.language.language === 'French'
            ? "S'inscrire"
            : 'Sign up'}
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
            onChangeText={val => setName(val)}
            placeholder={
              props.language.language === 'Arabic'
                ? 'البريد الإلكتروني'
                : 'Name'
            }></TextInput>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            onChangeText={val => setEmail(val)}
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
            secureTextEntry={true}
            onChangeText={val => setPassword(val)}
            placeholder={
              props.language.language === 'Arabic'
                ? 'كلمه السر'
                : props.language.language === 'French'
                ? 'Mot de passe'
                : 'Password'
            }></TextInput>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            secureTextEntry={true}
            onChangeText={val => setConfirmPassword(val)}
            placeholder={
              props.language.language === 'Arabic'
                ? 'كلمه السر'
                : props.language.language === 'French'
                ? 'Mot de passe'
                : 'Confirm Password'
            }></TextInput>
          <BaseButton
            onPress={handleSubmit}
            width="100%"
            title={
              props.language.language === 'Arabic'
                ? 'تسجيل'
                : props.language.language === 'French'
                ? "S'inscrire"
                : 'Sign up'
            }
            type="flat"></BaseButton>
          <BaseButton
            onPress={() => props.navigation.replace('Login')}
            width="100%"
            title={
              props.language.language === 'Arabic'
                ? 'دخول'
                : props.language.language === 'French'
                ? 'Se connecter'
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

export default SignupScreen;
