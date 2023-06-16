import React from 'react';
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import backImg from "../assets/images/arrow_left.png";
import {routerConstants} from "../constants/routerConstants";
import userAvatar from "../assets/images/user.png";
import homeImg from "../assets/images/home.png";
import star from "../assets/images/star.png";

const RateAppS = ({navigation}) => {
    return (
        <BaseWrapperComponent isKeyboardAwareScrollView={true}>
            <View style={{
                paddingTop: 20,
                flexDirection: 'row', alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                height: 100,
                flex: 1,
                backgroundColor: 'rgba(192,238,131,0.48)'

            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 5}}>

                    <TouchableOpacity onPress={() => navigation.goBack()}  style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={backImg}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems: 'center', flexDirection: 'row'}}
                                      onPress={() => navigation.navigate(routerConstants.user)}>
                        <Image style={{width: 40, height: 40}} source={userAvatar}/>
                        <Text style={{ marginLeft: 10}}>Nick</Text>
                    </TouchableOpacity>


                </View>
                <TouchableOpacity onPress={() => navigation.navigate(routerConstants.MAIN)}>
                    <Image style={{width: 40, height: 40, marginRight: 10, borderRadius: 17}} source={homeImg}/>
                </TouchableOpacity>
            </View>
        <View style={styles.container}>
            <Text style={{fontSize: 22, color: 'white'}}>Оцените наше приложение</Text>
           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 30 }}>
               <Image style={{width: 50, height: 50, marginRight: 10}} source={star}/>
               <Image style={{width: 50, height: 50, marginRight: 10}} source={star}/>
               <Image style={{width: 50, height: 50, marginRight: 10}} source={star}/>
               <Image style={{width: 50, height: 50, marginRight: 10}} source={star}/>
               <Image style={{width: 50, height: 50}} source={star}/>
           </View>
            <Text style={{fontSize: 22, color: 'white'}}>Поделитесь своим мнением</Text>
            <Text style={{fontSize: 16, color: 'white'}}>Это поможет нам развиваться и становиться лучше для вас</Text>
            <View style={{
                backgroundColor: 'rgb(255,248,248)',
                paddingHorizontal: 20,
                width: '90%',
                marginTop: 30,
                paddingTop: 10,
                borderRadius: 20,
                shadowColor: '#000000',
                shadowOpacity: 0.5,
                shadowOffset: {width: 0, height: 2},
                shadowRadius: 4,
                height: 400,
                elevation: 5, // Требуется для Android
                marginBottom: 20
            }}>
            <TextInput
                style={styles.textArea}
                multiline
                placeholder={'введите текст'}
                numberOfLines={4} // Можно указать желаемое количество видимых строк
                value={''}
            />
            </View>
        </View>
        </BaseWrapperComponent>
    );
};
const styles = StyleSheet.create({
    textArea: {

        paddingHorizontal: 10,
        paddingTop: 10,
    },
    container: {
        alignItems: 'center',
        height: 1000,
        paddingTop: 20,
        backgroundColor: '#9CA18D',
        flex: 1,
        paddingBottom: 50
    },
})
export default RateAppS;
