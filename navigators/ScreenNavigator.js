import HomeScreen from '../screens/HomeScreen';
import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import CartScreen from '../screens/CartScreen';
import ApparelScreen from '../screens/ApparelScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SaleScreen from '../screens/SaleScreen';
import SplashScreen from '../screens/SplashScreen';
import COLORS from '../constants/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CollectionsScreen from '../screens/CollectionsScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Colors from '../constants/Colors';
import ForgetScreen from '../screens/ForgetScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {StackActions} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

const Home = function (props) {
  const {region} = props;
  const {language} = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Collections">
      <Stack.Screen
        options={{headerShown: false}}
        name="Collections"
        component={CollectionsScreen}></Stack.Screen>
      <Stack.Screen name="Categories">
        {props => <HomeScreen {...props} fav={props.language}></HomeScreen>}
      </Stack.Screen>
      <Stack.Screen name="CartScreen">
        {props => <CartScreen {...props} fav={props.favs}></CartScreen>}
      </Stack.Screen>
      <Stack.Screen name="Sale">
        {props => (
          <SaleScreen
            region={region}
            language={language}
            {...props}></SaleScreen>
        )}
      </Stack.Screen>
      <Stack.Screen name="ApparelScreen">
        {props => <ApparelScreen region={region} {...props}></ApparelScreen>}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="DetailsScreen">
        {props => <DetailsScreen region={region} {...props}></DetailsScreen>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
const Cart = function (props) {
  const {region} = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CartScreen">
      {/* <Stack.Screen name="Categories" component={HomeScreen}></Stack.Screen> */}
      <Stack.Screen name="CartScreen">
        {function () {
          return (
            <CartScreen
              region={region}
              {...props}
              cartData={props.cartData}></CartScreen>
          );
        }}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="DetailsScreenCart">
        {props => <DetailsScreen region={region} {...props}></DetailsScreen>}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="PaymentScreen">
        {props => <PaymentScreen region={region} {...props}></PaymentScreen>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const Account = function (props) {
  const [status, setStatus] = useState(props.data.isLoggedin);

  useEffect(() => {
    setStatus(props.data.isLoggedin);
  }, [props.data.isLoggedin]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTintColor: Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName={status ? 'Test' : 'Login'}>
      <Stack.Screen options={{headerShown: false}} name="Login">
        {function () {
          return (
            <LoginScreen {...props} language={props.language}></LoginScreen>
          );
        }}
      </Stack.Screen>
      <Stack.Screen options={{headerShown: false}} name="Signup">
        {function () {
          return (
            <SignupScreen {...props} language={props.language}></SignupScreen>
          );
        }}
      </Stack.Screen>
      <Stack.Screen options={{headerShown: false}} name="Reset Password">
        {function () {
          return (
            <ForgetScreen {...props} language={props.language}></ForgetScreen>
          );
        }}
      </Stack.Screen>
      <Stack.Screen options={{headerShown: false}} name="Test">
        {() => {
          if (status) {
            return (
              <View>
                <Text>sss</Text>
                <Button
                  title="logout"
                  onPress={() => props.navigation.replace('Login')}></Button>
              </View>
            );
          }
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const Settings = function (props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SettingsScreen">
      <Stack.Screen name="SettingsScreen">
        {function (props) {
          return <SettingsScreen {...props}></SettingsScreen>;
        }}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
const Favorites = function (props) {
  const {region} = props;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="FavoritesScreen">
      <Stack.Screen name="FavoritesScreen">
        {function () {
          return (
            <FavoritesScreen
              region={region}
              {...props}
              data={props.data}></FavoritesScreen>
          );
        }}
      </Stack.Screen>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}
        name="DetailsScreenFavorit">
        {props => <DetailsScreen region={region} {...props}></DetailsScreen>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const MainStackScreen = function () {
  const data = useSelector(state => state.favorites.favorites);
  const cartData = useSelector(state => state.cart.cart);
  const initData = useSelector(state => state.auth);
  const language = useSelector(state => state.language);
  const region = useSelector(state => state.region);

  return (
    <Tab.Navigator
      name="ss"
      id="initBar"
      inactiveColor={Colors.primaryColor}
      activeColor={Colors.primaryColor}
      barStyle={{
        backgroundColor: 'white',
        height: 65,
        justifyContent: 'center',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={Colors.primaryColor}
                name="ios-home-outline"
                size={25}></Icon>
            );
          },
        }}
        name={
          language.language === 'Arabic'
            ? 'الرئيسية'
            : language.language === 'French'
            ? 'Acceuil'
            : 'Home'
        }>
        {function () {
          return <Home region={region} language={language} favs={data}></Home>;
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={cartData.length > 0 ? 'red' : Colors.primaryColor}
                name={cartData.length <= 0 ? 'ios-cart-outline' : 'ios-cart'}
                size={25}></Icon>
            );
          },
        }}
        name={
          language.language === 'Arabic'
            ? 'سلة'
            : language.language === 'French'
            ? 'Panier'
            : 'Cart'
        }>
        {function (props) {
          return (
            <Cart
              region={region}
              language={language}
              {...props}
              cartData={cartData}
            />
          );
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={data.length > 0 ? 'red' : Colors.primaryColor}
                name={data.length <= 0 ? 'ios-heart-outline' : 'ios-heart'}
                size={25}></Icon>
            );
          },
          tabBarButton: function () {
            return <TouchableOpacity style={{color: red}}></TouchableOpacity>;
          },
        }}
        name={
          language.language === 'Arabic'
            ? 'المفضلة'
            : language.language === 'French'
            ? 'Favoris'
            : 'Favorites'
        }>
        {function (props) {
          return (
            <Favorites
              region={region}
              language={language}
              {...props}
              data={data}
            />
          );
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon
                color={Colors.primaryColor}
                name="ios-person-outline"
                size={25}></Icon>
            );
          },
        }}
        name={
          language.language === 'Arabic'
            ? 'الحساب'
            : language.language === 'French'
            ? 'Compte'
            : 'Account'
        }>
        {function (props) {
          return (
            <Account
              {...props}
              language={language}
              navigation={props.navigation}
              data={initData}
            />
          );
        }}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: function () {
            return (
              <Icon color={Colors.primaryColor} name="cog" size={25}></Icon>
            );
          },
        }}
        name={
          language.language === 'Arabic'
            ? 'إعدادات'
            : language.language === 'French'
            ? 'Réglages'
            : 'Setting'
        }
        component={Settings}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = (
  <Stack.Navigator initialRouteName="Start">
    <Stack.Screen
      options={{headerShown: false}}
      name="Splash"
      component={SplashScreen}></Stack.Screen>
    {/* <Stack.Screen name="Sale" component={SaleScreen}></Stack.Screen> */}
    <Stack.Screen
      options={{headerShown: false}}
      name="Start"
      component={StartScreen}></Stack.Screen>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="MainStackScreen"
      component={MainStackScreen}></Stack.Screen>
  </Stack.Navigator>
);

export default StackNavigator;
