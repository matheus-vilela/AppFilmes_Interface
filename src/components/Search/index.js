
import React from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Search (){
  return(
    <View style={styles.ground}> 
      <View style={styles.viewSearch}>
        <TextInput
          style={styles.input}
          placeholder="Procurando algo?"
        />
        <TouchableOpacity style={styles.icon}>
          <MaterialIcons name="search" color="#000" size={25} />
        </TouchableOpacity>
      </View>
    </View>

  );
}