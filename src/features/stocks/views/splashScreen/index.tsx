import React, { useEffect } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StockScreenList } from "../../../../rootNavigation";
import SCREENS from "../../../../constants/screen";

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<StockScreenList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(SCREENS.Login);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (

    <View>
      <Image source={require('../../../../assets/Splashscreen.png')} style={{
        justifyContent: "center",
        alignItems: "center",
        width: wp('100%')
      }} />
    </View>
  );
};


export default SplashScreen;

