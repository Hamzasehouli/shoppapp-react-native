import React, {useLayoutEffect, useState} from 'react';
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

const ProfileScreen = function (props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [credentials, setCredentials] = useState(auth);

  const [isLoading, setIsLoading] = useState(false);

  function handleLogout() {
    dispatch({
      type: 'auth',
      status: false,
      email: '',
      name: '',
      token: '',
    });
    props.navigation.replace('Login');
  }
  return (
    <KeyboardAvoidingView
      style={{backgroundColor: 'white'}}
      behavior="position">
      <View style={styles.screen}>
        <Blue width={100} height={100} style={{marginBottom: 14}}></Blue>
        <View style={{flexDirection: 'column', width: '70%'}}>
          <View style={{marginTop: 20}}>
            <Text>{credentials.name}</Text>
            <Text>{credentials.email}</Text>
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
                onPress={handleLogout}
                width="100%"
                title={
                  props.language.language === 'Arabic'
                    ? 'إرسال'
                    : props.language.language === 'French'
                    ? 'Déconnecter'
                    : 'Log out'
                }
                type="flat"></BaseButton>
            )}
          </View>
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

export default ProfileScreen;
