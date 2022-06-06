// import {View, useStripe} from '@stripe/stripe-react-native';
import {WebView} from 'react-native-webview';
import React from 'react';
import {View, Text} from 'react-native';
function PaymentScreen() {
  return <WebView source={{uri: 'https://avito.ma'}} />;
}

export default PaymentScreen;
