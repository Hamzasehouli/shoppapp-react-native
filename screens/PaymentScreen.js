// import {View, useStripe} from '@stripe/stripe-react-native';
import {WebView} from 'react-native-webview';
import React from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
function PaymentScreen(props) {
  const dispatch = useDispatch();
  return (
    <WebView
      source={{uri: props.route.params.url}}
      onNavigationStateChange={navState => {
        if (!navState.url.includes('success')) return;
        dispatch({
          type: 'deleteCart',
          props,
        });
      }}
    />
  );
}

export default PaymentScreen;
