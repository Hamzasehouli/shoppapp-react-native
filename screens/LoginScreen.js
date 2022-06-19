import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Alert,
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const LoginScreen = function (props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState();
  const [emailStateError, setEmailStateError] = useState('');
  const [passwordStateError, setPaswordStateError] = useState('');

  async function handleSubmit() {
    setIsLoading(true);
    let emailError = false;
    let passwordError = false;
    try {
      if (!email || !email.includes('@')) {
        emailError = 'Please enter a valid email';
      }
      if (!password || password.length < 8) {
        passwordError = 'Please enter a valid password';
      }

      if (emailError || passwordError) {
        throw new Error('error');
      }

      const res = await fetch(
        'https://shoppyapp-backend.herokuapp.com/api/v1/users/login',
        {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
      const data = await res.json();

      if (res.status != 200) {
        throw new Error('Log in failed ' + data.error + ' ' + data.statusCode);
      }

      dispatch({
        type: 'auth',
        status: true,
        email: data.data.user.email,
        name: data.data.user.name,
        token: data.token,
      });
      Alert.alert('Log in succeded', '', [
        {
          text: 'OK',
          onPress: () => props.navigation.replace('MainStackScreen'),
        },
      ]);
    } catch (err) {
      setEmailStateError(emailError);
      setPaswordStateError(passwordError);
      Alert.alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior="position" style={{height: hp(0)}}>
      <View style={styles.screen}>
        <Blue
          width={wp(100)}
          height={hp(20)}
          style={{marginBottom: hp(1)}}></Blue>
        <Text
          style={{
            fontWeight: '700',
            textAlign: 'left',
            color: Colors.primaryColor,
            fontSize: hp(3.5),
            marginBottom: hp(3),
          }}>
          {props.language.language === 'Arabic'
            ? 'دخول'
            : props.language.language === 'French'
            ? 'Connexion'
            : 'Log in'}
        </Text>
        <View style={{flexDirection: 'column', width: wp('70%')}}>
          <TextInput
            style={{
              height: hp(8),
              backgroundColor: 'transparent',
              fontSize: hp(3),
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
          {emailStateError !== '' && (
            <Text style={{color: 'red'}}>{emailStateError}</Text>
          )}

          <TextInput
            style={{
              height: hp(8),
              backgroundColor: 'transparent',
              fontSize: hp(3),
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
          <Text style={{color: 'red'}}>{passwordStateError}</Text>
          <View style={{marginTop: hp(2), alignItems: 'center'}}>
            {isLoading ? (
              <BaseButton
                onPress={() => {
                  return;
                }}
                width={wp('100%')}
                title=". . ."
                type="flat"></BaseButton>
            ) : (
              <BaseButton
                fontSize={wp(6)}
                onPress={handleSubmit}
                width={wp(60)}
                title={
                  props.language.language === 'Arabic'
                    ? 'دخول'
                    : props.language.language === 'French'
                    ? 'Se connecter'
                    : 'Log in'
                }
                type="flat"></BaseButton>
            )}
          </View>
          <BaseButton
            style={{alignItems: 'center', marginTop: hp(2.5)}}
            fontSize={wp(5)}
            onPress={() => props.navigation.push('Reset Password')}
            width={wp('60%')}
            title={
              props.language.language === 'Arabic'
                ? 'نسيت كلمة المرور'
                : props.language.language === 'French'
                ? 'Mot de passe oublié ?'
                : 'Forget password ?'
            }
            type="ghost"></BaseButton>
        </View>
        <View style={{marginTop: hp(4)}}>
          <BaseButton
            onPress={() => props.navigation.replace('Signup')}
            fontSize={hp(3)}
            width={wp('40%')}
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
    width: wp(100),
    height: hp(100),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

export default LoginScreen;
