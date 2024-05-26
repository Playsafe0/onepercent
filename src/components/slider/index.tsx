
import { useState } from 'react';
import { Text, View } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import PushNotification from "react-native-push-notification";

import SliderStyle from './styles';

interface ISliderProps {
  stockName: string
  setIsDeleteDisabled: (value: boolean) => void;
}

const Slider: React.FC<ISliderProps> = (props) => {

  const [isSwiped, setIsSwiped] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleNotification = () => {
    PushNotification.localNotification(
      {
        channelId: 'one-percent',
        title: "One Percent",
        message: "Your Purchase Order for ".concat(props?.stockName, ' is completed'),
        bigText: "Your Purchase Order for ".concat(props?.stockName, ' is completed'),
      }
    )
  }

  const handleSwipeSuccess = () => {
    setIsSwiped(true);
    handleNotification();
    setIsDisabled(true);
    props.setIsDeleteDisabled(true)
  };

  const handleSwipeStart = () => {
    setIsSwiped(false);
  };

  const getThumbIcon = isSwiped ? require('../../assets/tick.png') : require('../../assets/arrow.png');

  return (
    <View style={{ display: 'flex', alignItems: 'center', marginBottom:20 }}>
      <SwipeButton
        disabled={isDisabled}
        swipeSuccessThreshold={70}
        height={45}
        width={330}
        title={'Swipe to Buy'}
        onSwipeSuccess={handleSwipeSuccess}
        onSwipeStart={handleSwipeStart}
        railFillBackgroundColor={!isSwiped ? "#34C759" : ''}
        railFillBorderColor="#34C759"
        thumbIconImageSource={getThumbIcon}
        railBackgroundColor="#FFF5D1"
        railBorderColor="#FFF5D1"
        thumbIconBackgroundColor='white'
        thumbIconBorderColor='white'
      />
      {isSwiped && <Text style={SliderStyle.sliderText}>Confirmed!</Text>}
    </View>
  )
}

export default Slider;