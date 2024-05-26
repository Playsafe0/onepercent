import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import CardStyles from './styles'


export interface CardProps {
    onClick: (data: any) => void;
    breifName: string;
    LongName: string;
    stockPrice: number,
    stockGains: number,
}

const Card: React.FC<CardProps> = (props) => {

    const [longPressed, setLongPressed] = useState(false);

    const toggleLongPressed = () => setLongPressed((prevState) => !prevState);

    return (
        <TouchableOpacity style={{ ...CardStyles.rootContainer, backgroundColor: longPressed ? '#D9D9D9' : 'white' }} onPress={props.onClick} onLongPress={() => toggleLongPressed()}>
            <View style={CardStyles.container}>
                <Image source={require('../../assets/stockImage.png')} style={CardStyles.image} />
                <View>
                    <Text style={CardStyles.breifNameText}>{props.breifName}</Text>
                    <Text style={CardStyles.longNameText}>{props.LongName}</Text>
                    <View style={CardStyles.priceContainer}>
                        <Text style={CardStyles.priceText}>{`$${props.stockPrice}`}</Text>
                        <Image source={require('../../assets/upperarrow.png')} style={CardStyles.arrowIcon} />
                        <Text style={CardStyles.gainText}>{props.stockGains}%</Text>
                    </View>
                </View>
            </View>
            {longPressed && <View style={CardStyles.expandableCardStyle}>
                <Text style={CardStyles.breifNameText}>
                    {props.LongName}
                </Text>
                <Text style={CardStyles.descriptionText}>
                    Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States.
                </Text>
            </View>}

        </TouchableOpacity>

    )
};

export default Card;