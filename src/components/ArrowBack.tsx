import React from 'react';
import {Image, ImageSourcePropType, TouchableOpacity} from "react-native";
import arrowLeftBlackImg from "../assets/images/arrow_left.png";
type ArrowBackProps = {
    goBackPress: any,
    img?: ImageSourcePropType
    styleTouchable?: any
}
const ArrowBack = ({goBackPress, img, styleTouchable}: ArrowBackProps) => {
    return (
        <TouchableOpacity style={{marginTop: 10, marginLeft: 10, ...styleTouchable}} onPress={goBackPress}>
            <Image style={{width: 31, height: 31}} source={img ?? arrowLeftBlackImg}/>
        </TouchableOpacity>
    );
};

export default ArrowBack;