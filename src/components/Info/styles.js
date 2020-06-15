import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
  moreInfo:{
    backgroundColor: 'rgba(255,255,255,0.9)',
    width: "90%",
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 33,
    height:'100%',
    
  },
  movieTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  movieDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
});

export default styles;