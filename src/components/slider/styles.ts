
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SliderStyle = StyleSheet.create({
  sliderText: {
    position: 'absolute',
    bottom: wp('4.66%'), 
    fontSize: 20,
    fontWeight: '600',
    color: 'black'
  }
});

export default SliderStyle;