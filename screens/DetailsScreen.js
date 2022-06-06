import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BaseButton from '../components/BaseButton';
import BaseText from '../components/BaseText';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import currencyConverter from '../converters/currencyConverter';
import regionChecker from '../converters/regionChecker';

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [region, setRegion] = useState(props?.region?.region);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [apparel, setApparel] = useState(props.route.params.apparel);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    setApparel(props.route.params.apparel);
  }, []);
  useEffect(
    () =>
      props.navigation.setOptions({
        title: '',
      }),
    [],
  );
  const carouselRef = useRef(null);

  // const goForward = () => {
  //   carouselRef.current.snapToNext();
  // };

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View key={item.id} style={styles.item}>
        <ParallaxImage
          key={item.id}
          source={{uri: item}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0}
          {...parallaxProps}
        />
        {/* <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text> */}
      </View>
    );
  };

  return (
    <View>
      <ScrollView
        style={{
          width: screenWidth,
          backgroundColor: 'white',
          height: props.route.params.isFromCartScreen ? '100%' : '90%',
        }}>
        {/* <View style={styles.container}> */}
        <View>
          <Carousel
            ref={carouselRef}
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth}
            data={[apparel.imageUrl, ...apparel.images]}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </View>
        {/* </View> */}
        <View style={{padding: 9}}>
          <BaseText>{apparel.title}</BaseText>
          <BaseText
            color={Colors.primaryColor}
            size={apparel.sale ? 15 : 18}
            style={{fontWeight: '700'}}>
            <Text
              style={
                apparel.sale
                  ? {
                      textDecorationLine: 'line-through',
                      textDecorationStyle: 'solid',
                    }
                  : {}
              }>
              {regionChecker(region)}
              {currencyConverter(apparel.price, region)}
            </Text>
          </BaseText>
          <BaseText color={'red'} style={{fontWeight: '700'}} size={18}>
            {apparel.discountPrice &&
              `${regionChecker(region)}${currencyConverter(
                apparel.discountPrice,
                region,
              )}`}
          </BaseText>

          <Text style={{...styles.marginBottom3}}>Ref 28864/9927</Text>
        </View>
      </ScrollView>

      {!props.route.params.isFromCartScreen && (
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Picker
            style={{backgroundColor: 'white', width: 180}}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Select size" invalid />
            {apparel.sizes?.map(s => (
              <Picker.Item key={s} label={s} value={s} />
            ))}
          </Picker>

          <BaseButton
            onPress={() => {
              if (selectedLanguage === '') return;
              dispatch({
                type: 'ADD_TO_CART',
                apparel: {...apparel, size: selectedLanguage},
              });
              // props.navigation.navigate('CartScreen');
            }}
            fontSize={15}
            width="50%"
            title="Add"
            type="flat"></BaseButton>
        </View>
      )}
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  item: {
    width: screenWidth,
    height: 500,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    height: 900,
  },
  marginBottom3: {
    marginBottom: 7,
  },
});

// import Carousel from 'react-native-snap-carousel';
// import React, {useEffect} from 'react';
// import {View, Text, Image} from 'react-native';

// const DetailsScreen = function (props) {
//   useEffect(() => {
//     console.log(props.route.params.apparel.images);
//   });
//   renderItem = ({item, index}) => {
//     return (
//       <View>
//         <Image source={item}></Image>
//         <Text>hamza</Text>
//       </View>
//     );
//   };

//   return (
//     <Carousel
//       // ref={(c) => { this._carousel = c; }}
//       data={props.route.params.apparel.images}
//       renderItem={renderItem}
//       sliderWidth={100}
//       itemWidth={100}
//     />
//   );
// };

// export default DetailsScreen;
