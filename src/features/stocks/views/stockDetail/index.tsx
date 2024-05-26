import React, { useCallback, useEffect } from "react";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp, useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { StockScreenList } from "../../../../rootNavigation";
import SCREENS from "../../../../constants/screen";
import { useTypedSelector } from "../../../../store/rootStore";
import { getStockDetail } from "../../actions/stockDetails";
import { getAddtoCart } from "../../actions/addToCart";
import StockDetailsStyle from "./styles";

interface IStockDetail {
  route: RouteProp<StockScreenList, SCREENS.StockDetail>
}
const StockDetail: React.FC<IStockDetail> = (props) => {
  const routeParams = props.route.params;
  const dispatch = useDispatch();

  const defaultNavigation = useNavigation<StackNavigationProp<StockScreenList>>();

  const stockDetailState = useTypedSelector((state) => state.stockDetail);
  const cartListState = useTypedSelector((state) => state.cartList);

  const stockDetailData = stockDetailState?.stockDetail?.data;

  useEffect(() => {
    dispatch(getStockDetail({
      symbol: 'AAPL:NASDAQ', //HERE FROM NAVIGATION OUR STOCKALIASID SHOULD BE PASSED 
      language: 'en'
    }))
  }, [])

  const onButtonClick = () => {
    dispatch(getAddtoCart({ data: stockDetailData, deletetheItem: false }));
    defaultNavigation.navigate(SCREENS.CartPage)
  }

  return (
    <View style={StockDetailsStyle.container}>
      <Image source={require('../../../../assets/apple-logo.png')} />
      <Text style={StockDetailsStyle.firstTextStyle} >{stockDetailData?.symbol}</Text>
      <Text style={StockDetailsStyle.secondTextStyle}>{stockDetailData?.name}</Text>
      <Text style={StockDetailsStyle.stockPriceStyle}>{`$ ${stockDetailData?.price}`}</Text>
      <View style={StockDetailsStyle.stockPercentageContainer}>
        <Image source={require('../../../../assets/upperarrow.png')} style={StockDetailsStyle.upArrowIcon} />
        <Text style={StockDetailsStyle.stockPercentageText}>{`${stockDetailData?.change} %`}</Text>
      </View>
      <View style={StockDetailsStyle.overviewContainer}>
        <Text style={StockDetailsStyle.overviewPrimaryText}>{stockDetailData?.name}</Text>
        <Text numberOfLines={8} style={StockDetailsStyle.overviewSecondaryText}>{stockDetailData?.about}</Text>
      </View>
      <Button style={StockDetailsStyle.btnContainer} textColor="black" onPress={onButtonClick}>Add to order</Button>
    </View>
  );
};

export default StockDetail;