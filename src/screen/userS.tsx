import React from 'react';
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import userAvatar from "../assets/images/user.png";
import backImg from "../assets/images/arrow_left.png";
import right from "../assets/images/leftBlack.png";
import {routerConstants} from "../constants/routerConstants";


const UserS = ({navigation}) => {
    return (
        <BaseWrapperComponent isKeyboardAwareScrollView={true}>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 30}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                                      style={{flexDirection: 'row', alignItems: 'center', marginRight: 30}}>
                        <Image source={backImg}/>
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}} >
                        <Image style={{width: 100, height: 100}} source={userAvatar}/>
                        <Text style={{fontSize: 22, fontWeight: '600', marginLeft: 10}}>Nick</Text>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
                    <Text style={{fontSize: 24, color: 'black', fontWeight: '600'}}>О нас</Text>


                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: 'white',
                            borderRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                            , marginTop: 10
                        }}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                                    <View>
                                        <Text style={{fontSize: 16, color: 'black'}}>Версия приложения</Text>
                                        <Text style={{fontSize: 14, color: 'gray'}}>1.0.0</Text>
                                    </View>
                                    <Image source={right}/>
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: 'white',
                            borderRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                            , marginTop: 10
                        }}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                                    <View>
                                        <Text style={{fontSize: 16, color: 'black'}}>Сообщите о проблеме</Text>
                                    </View>
                                    <Image source={right}/>
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate(routerConstants.rateApp)} style={{
                            backgroundColor: 'white',
                            borderRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                            , marginTop: 10
                        }}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                                    <View>
                                        <Text style={{fontSize: 16, color: 'black'}}>Оцените приложение</Text>
                                    </View>
                                    <Image source={right}/>
                                </View>
                            </View>

                        </TouchableOpacity>


                        <Text style={{fontSize: 24, color: 'black', fontWeight: '600', marginTop: 20}}>Настройки</Text>
                        <TouchableOpacity style={{
                            backgroundColor: 'white',
                            borderRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                            , marginTop: 10
                        }}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                                    <View>
                                        <Text style={{fontSize: 16, color: 'black'}}>Настройки акаунта</Text>
                                    </View>
                                    <Image source={right}/>
                                </View>
                            </View>

                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            backgroundColor: 'white',
                            borderRadius: 20,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: 10,
                            alignItems: 'center'
                            , marginTop: 10
                        }}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 1}}>
                                    <View>
                                        <Text style={{fontSize: 16, color: 'black'}}>Тема</Text>
                                    </View>
                                    <Image source={right}/>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </BaseWrapperComponent>
    );
};
const styles = StyleSheet.create({
    container: {
        height: 1000,
        paddingTop: 20,
        backgroundColor: 'rgba(156,161,141,0.64)',
        flex: 1,
        paddingBottom: 50
    },
})
export default UserS;
