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

const SignupScreen = function (props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();
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
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhMHIC_IVXX0deef5sMnqrOnN617B0rmc`,
        {
          method: 'POST',
          header: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({email, password}),
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
            onChangeText={val => setPasword(val)}
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
