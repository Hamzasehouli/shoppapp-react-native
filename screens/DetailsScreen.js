import React, {useRef, useState, useLayoutEffect, useEffect} from 'react';
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

const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [selectedLanguage, setSelectedLanguage] = useState('jjjjjjjjjjjjj');
  const [apparel, setApparel] = useState(props.route.params.apparel);
  useLayoutEffect(() => {
    setApparel(props.route.params.apparel);
  }, [apparel]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  // useEffect(() => {
  //   setEntries(ENTRIES1);
  // }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
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
        style={{width: screenWidth, backgroundColor: 'white', height: '90%'}}>
        {/* <View style={styles.container}> */}
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth}
          data={[apparel.imageUrl, ...apparel.images]}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
        {/* </View> */}
        <View style={{padding: 9}}>
          <Text style={{...styles.marginBottom3, fontSize: 20}}>
            {apparel.title}
          </Text>
          <Text
            style={{
              ...styles.marginBottom3,
              fontSize: 25,
              fontWeight: '700',
              color: 'black',
            }}>
            ${apparel.price}
          </Text>

          <Text style={{...styles.marginBottom3}}>Ref 28864/9927</Text>
        </View>
      </ScrollView>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Picker
          style={{backgroundColor: 'white', width: 180}}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Select size" value="salect size" />
          <Picker.Item label="44" value="44" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="43" value="43" />
          <Picker.Item label="42" value="42" />
          <Picker.Item label="41" value="41" />
        </Picker>
        <BaseButton
          fontSize={15}
          width="50%"
          title="Add"
          type="flat"></BaseButton>
      </View>
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
