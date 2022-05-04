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

const collectionsData = [
  {id: 'cl1', title: 'Men'},
  {id: 'cl2', title: 'Women'},
  //   {id: 'cl3', title: 'Kids'},
  //   {id: 'cl4', title: 'Baby'},
  {id: 'cl5', title: 'Sale'},
];

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
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhMHIC_IVXX0deef5sMnqrOnN617B0rmc`,
        {
          method: 'POST',
          header: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        },
      );

      const data = await res.json();
      console.log(res);
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
  const renderItemHandler = function (item) {
    return (
      <TouchableOpacity
        style={{marginBottom: 20}}
        onPress={() => {
          if (item.item.title === 'Sale') {
            props.navigation.navigate({
              name: 'Sale',
            });
          } else {
            props.navigation.navigate({
              name: 'Categories',
              params: {collection: item.item.title},
            });
          }
        }}>
        <BaseText
          style={{
            textAlign: 'center',
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
          }}
          color={Colors.primaryColor}
          size={30}>
          {item.item.title}
        </BaseText>
      </TouchableOpacity>
    );
  };
  return (
    // <ImageBackground
    //   resizeMode="cover"
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //   }}
    //   source={{
    //     uri: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    //   }}>
    // </ImageBackground>
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
          Login
        </Text>
        <View style={{flexDirection: 'column', width: '70%'}}>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
            }}
            onChangeText={v => setEmail(v)}
            keyboardType="email-address"
            placeholder="Email"></TextInput>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
            }}
            onChangeText={v => setPassword(v)}
            secureTextEntry={true}
            placeholder="Password"></TextInput>
          <BaseButton
            onPress={handleSubmit}
            width="100%"
            title="Login"
            type="flat"></BaseButton>
          <BaseButton
            onPress={() => props.navigation.push('Reset Password')}
            width="100%"
            title="Forget password ?"
            type="ghost"></BaseButton>
        </View>
        <View style={{marginTop: 40}}>
          <BaseButton
            onPress={() => props.navigation.push('Signup')}
            fontSize={15}
            width="50%"
            title="Do not have an accout yet? Register here"
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
