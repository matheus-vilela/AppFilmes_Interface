
import React from 'react';
import { 
  View, 
  Text,
  TouchableOpacity 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Info ({lista, activeIndex}){
  return(
    <View style={styles.moreInfo}>
      <View style={{marginTop: 10}}>
        <Text style={styles.movieTitle}>{lista[activeIndex].title}</Text>
        <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
      </View>
      <TouchableOpacity 
      style={{ marginRight: 15, marginTop: 10 }} 
      onPress={() => alert('CLICOU')}
      >
        <MaterialIcons
        name="queue" 
        color="#131313" 
        size={30} 
        />
      </TouchableOpacity>
    </View>

  );
}