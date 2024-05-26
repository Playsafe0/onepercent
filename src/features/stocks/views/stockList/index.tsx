import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import PushNotification from "react-native-push-notification";
import { StackNavigationProp } from "@react-navigation/stack";

import { StockScreenList } from "../../../../rootNavigation";
import Card from "../../../../components/card";
import { useTypedSelector } from "../../../../store/rootStore";
import { getStockList } from "../../actions/stocklist";
import SCREENS from "../../../../constants/screen";
import styles from "./styles";

const StockList: React.FC = () => {
  const dispatch = useDispatch();
  const stockListState = useTypedSelector((state) => state.stockList);
  const stockListData = stockListState.stockList;
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(stockListData.trends);

  const defaultNavigation = useNavigation<StackNavigationProp<StockScreenList>>();

  useEffect(() => {
    dispatch(getStockList())
    createChannel();
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery) {
        const newData = stockListData.trends.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(newData);
      } else {
        setFilteredData(stockListData.trends);
      }
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery, stockListData.trends]);


  const onCardClick = (symbol :string) => {
    defaultNavigation.navigate(SCREENS.StockDetail, {
      stockAliasId: symbol,
    })
  };

  const createChannel = () => {
    PushNotification.createChannel(
      {
        channelId: 'one-percent',
        channelName: "One Percent",
      }
    )
  }

  const renderCard = (data: any) => {
    return (
      <View>
        <Card onClick={() => onCardClick(data.item.symbol)} breifName={data.item.symbol} LongName={data.item.name} stockPrice={data.item.price} stockGains={data.item.change} />
        <View style={styles.separatorStyle} />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View >
        {showSearch && <TextInput
          style={styles.searchBox}
          placeholder="Search for Stocks"
          placeholderTextColor='#999999'
          value={searchQuery}
          onChangeText={setSearchQuery}
        />}
        <FlatList
          data={filteredData} renderItem={(item) => renderCard(item)} onEndReached={() => { setShowSearch(true) }}
          onEndReachedThreshold={2}
          style={styles.flatListStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default StockList;

