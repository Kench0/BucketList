import React, {useEffect} from 'react';
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import leftBack from "../assets/images/leftBlack.png";
import done from "../assets/images/done.png";
import tree1 from "../assets/images/tree/tree1.png";
import {Title} from "./Main";

import TaskStore from "../store/AuthStore/taskStore";
import backImg from "../assets/images/arrow_left.png";
import userAvatar from "../assets/images/user.png";
import homeImg from "../assets/images/home.png";
import {routerConstants} from "../constants/routerConstants";
import {observer} from "mobx-react-lite";

const CategoryTaskList = observer(({navigation, route}: any) => {
    const {currCategoryTaskList, setCurrCategoryTaskList, setChangeTaskStatusHandler} = TaskStore

    useEffect(() => {
        if (route.params) {
            setCurrCategoryTaskList({...route.params.el})
        }
    }, [route.params])

    const changeTaskStatusHandler = (task: any) => {
        setChangeTaskStatusHandler(currCategoryTaskList?.id, task)
    }
    return (
        <BaseWrapperComponent colorBakground={'#9CA18D'} isKeyboardAwareScrollView={true}>
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
                        alignItems: currCategoryTaskList?.numTask?.length ? 'center' : 'flex-start',
                        justifyContent: 'space-between',
                        flex: 1,
                        width: '100%'
                    }}>
                        <Title title={` Категория ${currCategoryTaskList?.title} `}/>
                    </View>

                    <View style={{marginTop: 10}}>
                        {
                            currCategoryTaskList?.numTask?.map(el => {
                                return <TouchableOpacity style={{
                                    backgroundColor: 'white',
                                    borderRadius: 20,
                                    marginBottom: 10,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    padding: 10,
                                    alignItems: 'center'
                                }}
                                                         key={el.id}
                                                         onPress={() => navigation.navigate({
                                                             name: routerConstants.ViewTaskS,
                                                             params: {task: {...el}, idCategory: currCategoryTaskList?.id}
                                                         })}
                                >
                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Image style={{width: 20, height: 20, marginRight: 10}}
                                               source={el.img ? el.img : tree1}/>

                                        <View>
                                            <Text style={{fontSize: 16, width: '100%'}}>{el?.description}</Text>
                                            <Text style={{fontSize: 10, color: 'gray'}}>До {el?.deadline}</Text>
                                        </View>
                                    </View>
                                    { el.isDone ?
                                        <View  style={ { alignItems: 'center' }}>
                                            <Image style={{width: 20, height: 20, marginRight: 10}} source={done}/>
                                            <Text style={{ color: 'gray' }} >Завершено</Text>
                                        </View>
                                        :
                                        <TouchableOpacity onPress={() => changeTaskStatusHandler(el)} style={ { alignItems: 'center' }}>
                                            <Image style={{width: 20, height: 20, marginRight: 10}} source={done}/>
                                            <Text style={{ color: 'gray' }} >Завершить</Text>
                                        </TouchableOpacity>
                                    }

                                </TouchableOpacity>
                            })
                        }
                    </View>
                </View>

            </View>

        </BaseWrapperComponent>
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
export default CategoryTaskList;
