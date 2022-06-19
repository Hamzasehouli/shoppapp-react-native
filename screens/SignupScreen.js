import React, {useState} from 'react';
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

const SignupScreen = function (props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [nameStateError, setNameStateError] = useState('');
  const [emailStateError, setEmailStateError] = useState('');
  const [passwordStateError, setPaswordStateError] = useState('');
  const [confirmPasswordStateError, setConfirmPasswordStateError] =
    useState('');

  async function handleSubmit() {
    setIsLoading(true);
    let nameError = '';
    let emailError = '';
    let passwordError = '';
    let confirmPasswordError = '';
    try {
      if (!name || name.length < 4) {
        nameError =
          'Please enter a valid name; name should contain at least 4 chars';
      }
      if (!email || !email.includes('@')) {
        emailError = 'Please enter a valid email';
      }
      if (!password || password.length < 8) {
        passwordError = 'Please enter a valid password';
      }
      if (
        !confirmPassword ||
        confirmPassword.length < 8 ||
        confirmPassword !== password
      ) {
        confirmPasswordError = 'Password and confirm password do not match';
      }

      if (nameError || emailError || passwordError || confirmPasswordError) {
        throw new Error('error');
      }

      const res = await fetch(
        'http://192.168.42.83:3000/api/v1/users/register',
        {
          method: 'post',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
          }),
        },
      );
      const data = await res.json();

      if (res.status != 201) {
        throw new Error('Sign up failed ' + data.error + ' ' + data.statusCode);
      }
      dispatch({
        type: '',
        status: true,
        email: data.data.user.email,
        name: data.data.user.name,
        token: data.token,
      });
      Alert.alert('Sign up succeded', '', [
        {
          text: 'OK',
          onPress: () => props.navigation.replace('MainStackScreen'),
        },
      ]);
    } catch (err) {
      setNameStateError(nameError);
      setEmailStateError(emailError);
      setConfirmPasswordStateError(confirmPasswordError);
      setPaswordStateError(passwordError);
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
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            onChangeText={val => setName(val)}
            placeholder={
              props.language.language === 'Arabic'
                ? 'الاسم الكامل'
                : props.language.language === 'French'
                ? 'Noun'
                : 'Name'
            }></TextInput>
          {nameStateError !== '' && (
            <Text style={{color: 'red'}}>{nameStateError}</Text>
          )}
          <TextInput
            style={{
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
          {emailStateError !== '' && (
            <Text style={{color: 'red'}}>{emailStateError}</Text>
          )}
          <TextInput
            style={{
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
          {passwordStateError !== '' && (
            <Text style={{color: 'red'}}>{passwordStateError}</Text>
          )}
          <TextInput
            style={{
              backgroundColor: 'transparent',
              fontSize: 20,
              textAlign:
                props.language.language === 'Arabic' ? 'right' : 'left',
            }}
            secureTextEntry={true}
            onChangeText={val => setConfirmPassword(val)}
            placeholder={
              props.language.language === 'Arabic'
                ? 'اعد كلمه السر'
                : props.language.language === 'French'
                ? 'Confirmer mot de passe'
                : 'Confirm Password'
            }></TextInput>
          {confirmPasswordStateError !== '' && (
            <Text style={{color: 'red'}}>{confirmPasswordStateError}</Text>
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
                    ? 'تسجيل'
                    : props.language.language === 'French'
                    ? "S'inscrire"
                    : 'Sign up'
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
