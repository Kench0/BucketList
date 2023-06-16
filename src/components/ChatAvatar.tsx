import React from 'react';
import {Image, StyleSheet, View} from "react-native";
import avatarSmall from '../assets/images/people2.png'
import avatarBig from '../assets/images/Ellipse49.png'

const ChatAvatar = () => {
    return (
        <View style={{width: '100%' , flexDirection: 'column', marginTop: 20,  marginBottom: 15}}>
            <Image style={styles.imgBig} source={avatarBig}/>
            <Image style={styles.imgSmall} source={avatarSmall}/>
        </View>
    );
};
const styles = StyleSheet.create({
    imgBig: {width: 133, height: 133},
    imgSmall: {width: 34, height: 34, position: 'absolute', top: 100}

})
export default ChatAvatar;