import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CartPageStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: wp('4.44%'),
  },
  appleIcon: {
    width: wp('11.94%'),
    height: wp('11.94%'),
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: wp('6.67%'),
  },
  firstTextStyle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  secondTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999999',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: wp('2.22%'),
    gap: wp('2.22%'),
  },
  stockPrice: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  arrowIcon: {
    width: wp('3.33%'),
    height: wp('3.33%'),
    marginBottom: wp('1.66%'),
  },
  stockPercentage: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34C759',
    marginBottom: wp('0.55%'),
  },
  deleteIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default CartPageStyle;