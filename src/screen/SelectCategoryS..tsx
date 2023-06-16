import React, {useRef, useState} from 'react';
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import {Animated, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import leftBack from "../assets/images/leftBlack.png";
import plusGray from "../assets/images/plusGray.png";
import {Title} from "./Main";

import TaskStore from "../store/AuthStore/taskStore";
import backImg from "../assets/images/arrow_left.png";
import userAvatar from "../assets/images/user.png";
import homeImg from "../assets/images/home.png";
import {routerConstants} from "../constants/routerConstants";
import plusImg from "../assets/images/plus.png";
import {observer} from "mobx-react-lite";

export function generateNumericId() {
    const length = 8; // Длина числового идентификатора
    let id = '';
    const characters = '0123456789'; // Возможные символы для идентификатора

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters[randomIndex];
    }

    return Number(id);
}

const SelectCategoryS = observer(({navigation}: any) => {
    const {allMyCategory, addCategory} = TaskStore
    const translateY = useRef(new Animated.Value(0)).current;
    /* const [newCategory, setNewCategory] = useState<any>([])*/
    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        translateY.setValue(offsetY);
    };
    const plusCategoryHandler = () => {
        addCategory({id: generateNumericId(), title: 'Введите название', img: plusGray, numTask: []})
    }
    return (
        <>
            <BaseWrapperComponent onScroll={handleScroll} colorBakground={'#9CA18D'} isKeyboardAwareScrollView={true}>
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
                <View style={{
                    paddingTop: 20,
                    backgroundColor: '#9CA18D',
                    flex: 1,
                    paddingBottom: 50
                }}>
                    <View style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1,
                            width: '100%'
                        }}>
                            <Title title={'Категории'}/>
                        </View>

                        <View style={{marginTop: 10}}>
                            {
                                allMyCategory?.map(el => {
                                    return <TouchableOpacity style={{
                                        backgroundColor: 'white',
                                        borderRadius: 20,
                                        marginBottom: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        alignItems: 'center'
                                    }}
                                                             onPress={() => navigation.navigate({
                                                                 name: routerConstants.changeCategory,
                                                                 params: el
                                                             })}
                                                             key={el.id}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={{width: 20, height: 20, marginRight: 10}}
                                                   source={el.img as any}/>
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{fontSize: 16}}>{el.title}</Text>
                                                <Text style={{color: 'gray'}}>
                                                    {el?.numTask?.length} Задач(и)</Text>
                                            </View>
                                        </View>
                                        <Image style={{width: 20, height: 20, marginRight: 10}} source={leftBack}/>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </View>

                </View>

            </BaseWrapperComponent>
            <Animated.View style={[styles.fixedPosition, {transform: [{translateY}], bottom: translateY}]}>
                <TouchableOpacity onPress={plusCategoryHandler} style={{position: 'relative', left: '43%', top: 5}}>
                    <Image style={{width: 50, height: 50, borderRadius: 17}}
                           source={plusImg}/>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
})
const styles = StyleSheet.create({
    fixedPosition: {
        backgroundColor: 'rgba(192,238,131,0.48)',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: 60, // Здесь вы можете указать нужную вам высоту
        zIndex: 9999, // Здесь вы можете указать нужный вам z-index
    }
})
export default SelectCategoryS;
