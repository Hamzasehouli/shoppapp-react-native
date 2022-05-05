import React, {useState} from 'react';
import '@react-native-firebase/app';
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

  // const renderItemHandler = function (item) {
  //   return (
  //     <TouchableOpacity
  //       style={{marginBottom: 20}}
  //       onPress={() => {
  //         if (item.item.title === 'Sale') {
  //           props.navigation.navigate({
  //             name: 'Sale',
  //           });
  //         } else {
  //           props.navigation.navigate({
  //             name: 'Categories',
  //             params: {collection: item.item.title},
  //           });
  //         }
  //       }}>
  //       <BaseText
  //         style={{
  //           textAlign: 'center',
  //           fontWeight: '700',
  //           fontFamily: 'Roboto-Bold',
  //         }}
  //         color={Colors.primaryColor}
  //         size={30}>
  //         {item.item.title}
  //       </BaseText>
  //     </TouchableOpacity>
  //   );
  // };
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
          Signup
        </Text>
        <View style={{flexDirection: 'column', width: '70%'}}>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
            }}
            onChangeText={val => setEmail(val)}
            keyboardType="email-address"
            placeholder="Email"></TextInput>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
            }}
            secureTextEntry={true}
            onChangeText={val => setPasword(val)}
            placeholder="Password"></TextInput>
          <BaseButton
            onPress={handleSubmit}
            width="100%"
            title="Signup"
            type="flat"></BaseButton>
          <BaseButton
            onPress={() => props.navigation.replace('Login')}
            width="100%"
            title="Login"
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
