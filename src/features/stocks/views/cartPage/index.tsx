import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, FlatList, Platform, ToastAndroid } from "react-native";
import { useDispatch } from "react-redux";

import DeleteIcon from "../../../../assets/svg/DeleteIcon";
import { useTypedSelector } from "../../../../store/rootStore";
import Slider from "../../../../components/slider";
import { getAddtoCart } from "../../actions/addToCart";
import CartPageStyle from "./styles";

export const Toaster = (message: string) => {
  return Platform.OS === 'android' ? ToastAndroid.show(message, ToastAndroid.SHORT) : '';
};

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cartListState = useTypedSelector((state) => state.cartList);
  const cartListData = cartListState.cartList;

  const [isDeleteDisabled, setIsDeleteDisabled] = useState(false);

  console.log(isDeleteDisabled);

  const onDeleteClick = () => {
    !isDeleteDisabled ? dispatch(getAddtoCart({ data: cartListData[0], deletetheItem: true })) : Toaster('You can not Delete a stock once the order is placed');
  };

  const renderOrderCard = (item: any) => {
    return (
      <>
        {cartListData.length > 0 &&
          <View style={CartPageStyle.container}>
            <Image source={require('../../../../assets/apple-logo.png')} style={CartPageStyle.appleIcon} />
            <View style={CartPageStyle.subContainer}>
              <Text style={CartPageStyle.firstTextStyle}>{item.item?.symbol}</Text>
              <Text style={CartPageStyle.secondTextStyle}>{item.item?.name}</Text>
              <View style={CartPageStyle.textContainer}>
                <Text style={CartPageStyle.stockPrice}>{`$ ${item.item?.price}`}</Text>
                <Image source={require('../../../../assets/upperarrow.png')} style={CartPageStyle.arrowIcon} />
                <Text style={CartPageStyle.stockPercentage}>{` ${item.item?.change} %`}</Text>
              </View>
            </View>
            <TouchableOpacity style={CartPageStyle.deleteIconContainer} onPress={onDeleteClick}>
              <DeleteIcon />
            </TouchableOpacity>
          </View>}
      </>
    )
  };
  return (
    <>
      {cartListData.length === 0 &&
        <Text>Empty Cart</Text>}
      {cartListData.length > 0 && <>
        <FlatList data={cartListData} renderItem={(item) => renderOrderCard(item)} />
        <Slider stockName={cartListData[0]?.name} setIsDeleteDisabled={setIsDeleteDisabled} />
      </>}

    </>
  )
};

export default CartPage;