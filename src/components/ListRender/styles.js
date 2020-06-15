import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  slideView:{
    width: '100%',
    alignItems: 'center',
    justifyContent:'flex-end',
  },
  carousel:{
    overflow: 'visible',
  },
  carouselImg:{
    alignSelf: 'center',
    width: 300,
    height: 400,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position:'absolute',
    top: 15,
    right: 15,
  },
});

export default styles;