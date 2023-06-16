import React, {useState} from 'react';
import {Pressable, StyleProp, StyleSheet, Text, TouchableOpacity} from "react-native";

type ButtonProps = {
    onPress: () => void
    styleContainer?: StyleProp<any>
    styleText?: StyleProp<any>
    title: string
}
const Button = ({title, onPress, styleText, onPressIn, onPressOut, activeOpacity, styleContainer, activeHover}: any) => {
    const [activeBtn, setActiveBtn] = useState(false)
    return (
        <TouchableOpacity     onPressIn={() => setActiveBtn(true)}
                              onPressOut={() => setActiveBtn(false)}
                          style={{
                              backgroundColor:  activeHover && activeBtn ? '#D5E3FE' : 'rgba(213,227,254,0)',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 8,
                              height: 66, ...styleContainer
                          }} activeOpacity={activeOpacity ?? 1}
                          onPress={onPress}>
            <Text style={{
                ...styleText
            }}>{title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({});
export default Button;