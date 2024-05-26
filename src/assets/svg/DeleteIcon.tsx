import React from 'react';
import { View, ViewStyle } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface IAddCommentFilled {
  style?: ViewStyle;
  color?: string;
}

const DeleteIcon: React.FunctionComponent<IAddCommentFilled> = (props) => {
  return (
    <View style={props.style}>
      <Svg
        width={24}
        height={28}
        viewBox="0 0 24 28"
        fill="none"
      >
        <Path d="M8 10h2v12H8V10zM14 10h2v12h-2V10z" fill="#000" />
        <Path
          d="M0 4v2h2v20a2 2 0 002 2h16a2 2 0 002-2V6h2V4H0zm4 22V6h16v20H4zM8 0h8v2H8V0z"
          fill="#000"
        />
      </Svg>
    </View>
  );
};

export default DeleteIcon;
