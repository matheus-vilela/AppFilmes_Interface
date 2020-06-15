import React, { useState, useRef } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { MaterialIcons } from '@expo/vector-icons';


import styles from './styles';

export default function ListRender({setBackground, setActiveIndex,lista}){
  const carouselRef = useRef(null);
  const {width: screenWidth} = Dimensions.get('window');
  const _renderItem = ({ item, index }) => {
    return(
      <View>
        <TouchableOpacity>
          <Image
          source={item.img}
          style={styles.carouselImg}
          />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
          name="play-circle-outline" 
          size={30} color="#FFF" 
          style={styles.carouselIcon} 
          />
        </TouchableOpacity>
      </View>
    );
  };
  return(
  
    <View style={styles.slideView}>
      <Text 
        style={{color: '#FFF', fontSize: 25, fontWeight: 'bold', 
        marginLeft: 10, marginVertical: 10, }}
      >
      Acabou de chegar
      </Text>
        <Carousel
          style={styles.carousel}
          ref={carouselRef}
          data={lista}
          renderItem={_renderItem}
          sliderWidth={screenWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.5}
          onSnapToItem={ (index) => {
            setBackground(lista[index].img);
            setActiveIndex(index);
          }}
      />
    </View>
  );
}