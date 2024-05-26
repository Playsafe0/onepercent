import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SCREENS from "../constants/screen";
import Login from '../features/stocks/views/login'
import StockDetail from '../features/stocks/views/stockDetail'
import CartPage from '../features/stocks/views/cartPage'
import StockList from '../features/stocks/views/stockList'
import SplashScreen from "../features/stocks/views/splashScreen";

export type StockScreenList = {
  SplashScreen: undefined ;
  Login: undefined;
  StockList: undefined;
  StockDetail:
  {
      stockAliasId : string;
  };
  CartPage: undefined;
}

const Stack = createStackNavigator<StockScreenList>();

const RootNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={SCREENS.SplashScreen}>
        <Stack.Screen name={SCREENS.SplashScreen} options={{headerShown: false}} component={SplashScreen}/>
        <Stack.Screen name={SCREENS.Login} options={{headerShown: false}} component={Login} />
        <Stack.Screen name={SCREENS.StockList} options={{headerShown: false}} component={StockList} />
        <Stack.Screen name={SCREENS.StockDetail} component={StockDetail} />
        <Stack.Screen name={SCREENS.CartPage} component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};
export default RootNavigation;