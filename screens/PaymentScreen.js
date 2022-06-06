// import {View, useStripe} from '@stripe/stripe-react-native';
import React from 'react';
import {View, Text} from 'react-native';
function PaymentScreen() {
  return (
    <View>
      <View
        postalCodeEnabled={true}
        placeholders={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}></View>
    </View>
  );
}

export default PaymentScreen;
