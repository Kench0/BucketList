import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from "react-native";

const Backdrop = () => {
    return (
        <LinearGradient
            shouldRasterizeIOS={true}
            // Background Linear Gradient
            colors={['rgba(255,255,255,0.22)','rgb(213,227,254)']}
            //start={{ x: 1, y: 0.1 }}
            locations={[0.14, 0.8]}
            start={{x: 0.4, y: 0.1}}
            //end={{x: 0, y: 1}}
            style={styles.background}
        />
    );
};
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: 350,
        opacity: 0.4,
        zIndex: -10
    },
})

export default Backdrop;