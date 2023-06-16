import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {NavigationProp, ParamListBase} from "@react-navigation/native";
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import TaskStore from "../store/AuthStore/taskStore";
import backImg from "../assets/images/arrow_left.png"
import userAvatar from "../assets/images/user.png"
import homeImg from "../assets/images/home.png"
import leftArrowImg from "../assets/images/leftArrow.png"
import leftBack from "../assets/images/leftBlack.png"
import plusImg from "../assets/images/plus.png"
import {observer} from "mobx-react-lite";
import {routerConstants} from "../constants/routerConstants";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoginSProps = {
    navigation: NavigationProp<ParamListBase>
}
export const Title = ({title}) => {
    return <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>{title}</Text>
}

type ItemProps = {
    item: any;
    navigation: any;
};
const Item = ({item, navigation}: ItemProps) => {

    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate({name: routerConstants.garden, params: {id: item.id}})
        }}
                          style={[{
                              height: 190,
                              padding: 10,
                              alignItems: 'center'
                          }]}>
            <View style={{
                flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center',
                borderRadius: 16, padding: 10
            }}>
                <View style={{
                    flex: 1,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(38,69,41,0.34)',
                    borderRadius: 16,
                }}>
                    <Image style={{width: 80, height: 77}} source={item.img}/>
                </View>
                <Text style={[styles.textImg, {fontWeight: '500'}]}>{item.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {
                        item.numTask?.map((el, index) => {
                            if (!el.isDone) {
                                return <View key={el.id} style={{
                                    width: 10, height: 10,
                                    backgroundColor: 'rgba(171,159,152,0.35)',
                                    marginHorizontal: 2, borderRadius: 20
                                }}/>
                            }
                            return <View key={index} style={{
                                width: 10, height: 15,
                                backgroundColor: 'rgba(18,73,25,0.35)',
                                marginHorizontal: 2, borderRadius: 10
                            }}/>
                        })
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const MainS = observer(({navigation}: LoginSProps) => {
    const [selectedId, setSelectedId] = useState('');
    const {dataUsefulArticles, dataLastAddedTask, allMyCategory, setAllMyCategory, lastAddedTask} = TaskStore
    useEffect(() => {
        getLocalStorage()

    }, [])
    const getLocalStorage = async () => {
        try {
            const allMyCategory = await AsyncStorage.getItem('allMyCategory');
            if (allMyCategory !== null) {
                const categories = JSON.parse(allMyCategory);
                setAllMyCategory(categories)
            }
        } catch (error) {
            console.log('Ошибка при получении имени:', error);
        }
    };
    const renderItem = ({item}: { item: any }) => {
        return (
            <Item
                item={item}
                navigation={(navigation)}
            />
        );
    };
    const translateY = useRef(new Animated.Value(0)).current;

    const handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        translateY.setValue(offsetY);
    };
    return (
        <>
            <BaseWrapperComponent onScroll={handleScroll} scrollEventThrottle={16} isKeyboardAwareScrollView={true}>
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

                        <TouchableOpacity onPress={() => navigation.goBack()} style={{flexDirection: 'row', alignItems: 'center'}}>
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
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            paddingHorizontal: 10,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1,
                            width: '100%'
                        }}>
                            <Title title={'Ваши успехи'}/>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>Все</Text>
                                <Image style={{width: 20, height: 20}} source={leftArrowImg}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                        style={{flex: 1, marginBottom: 10, marginTop: 5}}>
                                <FlatList
                                    horizontal={true}
                                    data={allMyCategory}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                    extraData={selectedId}
                                    style={{flex: 1, height: '100%', width: '100%'}}
                                    contentContainerStyle={{alignItems: 'flex-start', width: '100%', flex: 1}}
                                />
                            </ScrollView>
                        </View>
                    </View>


                    <View style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1,
                            width: '100%'
                        }}>
                            <Title title={'Категории'}/>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>Все</Text>
                                <Image style={{width: 20, height: 20}} source={leftArrowImg}/>
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: 10}}>
                            {
                                allMyCategory?.map(el => {
                                    return <TouchableOpacity onPress={() => navigation.navigate({
                                        name: routerConstants.categoryTasksList,
                                        params: {el}
                                    })} style={{
                                        backgroundColor: 'white',
                                        borderRadius: 20,
                                        marginBottom: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        alignItems: 'center'
                                    }} key={el.id}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={{width: 20, height: 20, marginRight: 10}}
                                                   source={el.img as any}/>
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{fontSize: 16}}>{el.title}</Text>
                                                <Text style={{color: 'gray'}}>{el?.numTask?.length} Задач(и)</Text>
                                            </View>
                                        </View>
                                        <Image style={{width: 20, height: 20, marginRight: 10}} source={leftBack}/>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </View>
                    <View style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1,
                            width: '100%'
                        }}>
                            <Title title={`Последние добавленные\nзадачи`}/>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>Все</Text>
                                <Image style={{width: 20, height: 20}} source={leftArrowImg}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 10}}>
                            {
                                lastAddedTask?.map(el => {
                                    return <TouchableOpacity onPress={() => navigation.navigate({
                                        name: routerConstants.ViewTaskS,
                                        params: {task: {...el}}
                                    })}  style={{
                                        backgroundColor: 'white',
                                        borderRadius: 20,
                                        marginBottom: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        alignItems: 'center'
                                    }} key={el.id}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={{width: 20, height: 20, marginRight: 10}}
                                                   source={el.img as any}/>
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{fontSize: 16}}>{el.title}</Text>
                                            </View>
                                        </View>
                                        <Image style={{width: 20, height: 20, marginRight: 10}} source={leftBack}/>
                                    </TouchableOpacity>
                                })
                            }
                        </View>
                    </View>
                    <View style={{flex: 1, width: '100%', paddingHorizontal: 10}}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flex: 1,
                            width: '100%'
                        }}>
                            <Title title={`Полезные статьи`}/>
                            <TouchableOpacity  style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: 'white'}}>Все</Text>
                                <Image style={{width: 20, height: 20}} source={leftArrowImg}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: 10}}>
                            {
                                dataUsefulArticles.length && dataUsefulArticles?.map(el => {
                                    return <TouchableOpacity
                                        onPress={() => navigation.navigate({name: routerConstants.news, params: {...el} })}
                                        style={{
                                        backgroundColor: 'white',
                                        borderRadius: 20,
                                        marginBottom: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: 10,
                                        alignItems: 'center'
                                    }} key={el.id}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={{width: 20, height: 20, marginRight: 10}} source={el.img as any}/>
                                            <View style={{flexDirection: 'column'}}>
                                                <Text style={{fontSize: 16}}>{el.title}</Text>
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
                <TouchableOpacity onPress={() => navigation.navigate(routerConstants.selectCategory)}
                                  style={{position: 'relative', left: '43%', top: 5}}>
                    <Image style={{width: 50, height: 50, borderRadius: 17}}
                           source={plusImg}/>
                </TouchableOpacity>
            </Animated.View>
        </>
    );
});

const styles = StyleSheet.create({
    fixedPosition: {
        backgroundColor: 'rgba(192,238,131,0.48)',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: 60, // Здесь вы можете указать нужную вам высоту
        zIndex: 9999, // Здесь вы можете указать нужный вам z-index
    },
    textImg: {
        textAlign: 'left',
        marginRight: 10,
        color: 'black',
        fontWeight: '700',
        fontSize: 18
    },
    container: {
        paddingTop: 20,
        backgroundColor: '#9CA18D',
        flex: 1,
        paddingBottom: 50
    },
});


export default MainS;

