import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StockDetailsStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: wp('19%'),
    paddingHorizontal: wp('4.44%'),
  },
  firstTextStyle: {
    fontSize: 28,
    fontWeight: '600',
    paddingTop: wp('1.11%'),
    color: 'black',
  },
  secondTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999999',
  },
  stockPriceStyle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'black',
    paddingTop: wp('1.11%'),
  },
  stockPercentageContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('1.11%'),
  },
  upArrowIcon: {
    width: wp('3.88%'),
    height: wp('3.88%'),
  },
  stockPercentageText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#34C759'
  },
  overviewContainer: {
    paddingTop: wp('8.33%'),
    gap: wp('2.22%'),
    maxHeight :wp('35%'),
  },
  overviewPrimaryText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  overviewSecondaryText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
  btnContainer: {
    backgroundColor: '#ECD996',
    width: '100%',
    borderRadius: 0,
    marginTop: wp('70%'),
  }
});

export default StockDetailsStyle;