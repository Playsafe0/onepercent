import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CardStyles = StyleSheet.create({
  rootContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: wp('0.5%'),
    paddingVertical: hp('1%')
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: hp('3%'),
  },
  image: {
    marginVertical: wp('7%'),
    marginHorizontal: wp('7%'),
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  breifNameText: {
    fontSize: wp('5%'),
    fontFamily: 'NotoSans-Bold',
    color: 'black',
    fontWeight: '700',
  },
  longNameText: {
    fontSize: wp('4%'),
    // fontFamily: 'NotoSans-Regular',
    fontWeight: '400',
    color:'black',
  },
  priceText: {
    fontSize: wp('5%'),
    fontFamily: 'NotoSans-Bold',
    color: 'black',
    fontWeight: '700',
    marginRight: wp('1%')
  },
  gainText: {
    textAlign: 'center',
    fontSize: wp('4%'),
    fontFamily: 'NotoSans-Regular',
    color: '#34c759',
    fontWeight: '500',
    marginLeft: wp('1.5%')
  },
  expandableCardStyle: {
    marginHorizontal: wp('5%'),
  },
  descriptionText: {
    fontSize: wp('4%'),
    fontFamily: 'NotoSans-Regular',
    fontWeight: '400',
    color: 'black',
    marginTop: hp('1%'),
  },
  arrowIcon: {
    width: wp('2.27%'),
    height: wp('2.27%'),
    marginTop: wp('1.38%'),
    marginLeft: 8,
  }
});

export default CardStyles;