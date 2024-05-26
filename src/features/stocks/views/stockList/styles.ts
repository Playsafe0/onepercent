import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles =StyleSheet.create({
    containerStyle :{
      backgroundColor :'white',
      display :'flex',
    },

    separatorStyle: {
        borderWidth: wp('0.15%'),
        borderRadius: wp('0.25%'),
        borderColor: '#EBEBEB',
        width: wp('80%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
        marginLeft: wp('8%'),
        marginRight: wp('2%'),
        justifyContent: 'center',
      },
      searchBox: {
        height: hp('6%'),
        width:wp('94%'),
        borderColor: '#ccc',
        borderWidth: 1, 
        paddingHorizontal: 10,
        marginLeft:wp('2.7%'),
        color: '#999999', 
        backgroundColor: '#EBEBEB',
        marginTop: wp('8%'),
        marginBottom :wp('2%')
      },
      flatListStyle: { paddingTop: 20, }
      
});
export default styles ;