// import {View, useStripe} from '@stripe/stripe-react-native';
import {WebView} from 'react-native-webview';
import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
function PaymentScreen(props) {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const currency = useSelector(state => state.region.region);

  const handleSubmit = useCallback(() => {
    (async function () {
      try {
        const res = await fetch(
          'https://shoppyapp-backend.herokuapp.com/api/v1/purchase/create',
          {
            method: 'post',
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              data: props.route.params.data,
              currency:
                currency === 'Morocco'
                  ? 'mad'
                  : currency === 'UK'
                  ? 'gbp'
                  : 'usd',
              email: auth.email,
            }),
          },
        );

        dispatch({
          type: 'deleteCart',
          props,
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <WebView
      source={{uri: props.route.params.url}}
      automaticallyAdjustContentInsets="false"
      onLoadStart={navState => {
        if (!navState.nativeEvent.url.includes('success')) return;
        handleSubmit();
      }}
    />
  );
}

export default PaymentScreen;
