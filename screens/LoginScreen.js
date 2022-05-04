import React from 'react';
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

const collectionsData = [
  {id: 'cl1', title: 'Men'},
  {id: 'cl2', title: 'Women'},
  //   {id: 'cl3', title: 'Kids'},
  //   {id: 'cl4', title: 'Baby'},
  {id: 'cl5', title: 'Sale'},
];

const LoginScreen = function (props) {
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
            keyboardType="email-address"
            placeholder="Email"></TextInput>
          <TextInput
            style={{
              marginBottom: 20,
              backgroundColor: 'transparent',
              fontSize: 20,
            }}
            secureTextEntry={true}
            placeholder="Password"></TextInput>
          <BaseButton
            onPress={() => console.log('ddd')}
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
