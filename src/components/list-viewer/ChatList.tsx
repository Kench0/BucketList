import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {colors} from "../../assets/colors/colors";

const ChatList = ({data}) => {

    return (
        <View style={{ alignItems: data.isDoctor ? 'flex-start': 'flex-end', marginLeft: 10 }}>
            <View style={{...styles.container, backgroundColor: data.isDoctor ? '#4DB8D5' : '#7EA7D9'}}>
                <Text style={styles.text}>{data.text}</Text>
                <Image style={{...styles.avatar, left: data.isDoctor ? -10 : null }} source={data.avatar}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingVertical: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: 262,
        marginBottom: 20
    },
    avatar: {width: 34, height: 34, position: "absolute", bottom: -5, right: -7},
    text: {color: colors.white, fontSize: 13,  fontFamily: 'Onest-light',}

})

export default ChatList;