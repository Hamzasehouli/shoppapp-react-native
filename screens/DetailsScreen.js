import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

// const ENTRIES1 = [
//   {
//     title: 'Beautiful and dramatic Antelope Canyon',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration: 'https://i.imgur.com/UYiroysl.jpg',
//   },
//   {
//     title: 'Earlier this morning, NYC',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
//   },
//   {
//     title: 'White Pocket Sunset',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
//     illustration: 'https://i.imgur.com/MABUbpDl.jpg',
//   },
//   {
//     title: 'Acrocorinth, Greece',
//     subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
//     illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
//   },
//   {
//     title: 'The lone tree, majestic landscape of New Zealand',
//     subtitle: 'Lorem ipsum dolor sit amet',
//     illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
//   },
// ];
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  useEffect(() => {
    console.log(props.route.params.apparel);
  });
  const [entries, setEntries] = useState([]);
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
    <ScrollView style={{width: screenWidth, backgroundColor: 'white'}}>
      {/* <View style={styles.container}> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={[
          props.route.params.apparel.imageUrl,
          ...props.route.params.apparel.images,
        ]}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
      {/* </View> */}
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
      <Text>sssssssssssss</Text>
    </ScrollView>
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
