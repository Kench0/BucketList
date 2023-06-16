import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ImageSourcePropType} from "react-native";
import backImg from "../assets/images/arrow_left.png";
import tree1 from "../assets/images/treeSwiper/tree1.png";
import tree2 from "../assets/images/treeSwiper/tree2.png";
import tree3 from "../assets/images/treeSwiper/tree3.png";
import tree4 from "../assets/images/treeSwiper/tree4.png";
import tree5 from "../assets/images/treeSwiper/tree5.png";
import tree6 from "../assets/images/treeSwiper/tree6.png";
import pen from "../assets/images/pen.png";
import done from "../assets/images/done.png";
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import TaskStore from "../store/AuthStore/taskStore";
import Swiper from 'react-native-swiper';
import {colors} from "../assets/colors/colors";
import {observer} from "mobx-react-lite";
import DataPicker from "../components/dataPicker";
import {generateNumericId} from "./SelectCategoryS.";

const images = [
    tree5,
    tree6,
    tree1,
    tree2,
    tree3,
    tree4,

];
const ChangeCategoryS = observer(({navigation, route}: any) => {
    const [currCtagory, setCurrCategory] = useState<any>({})
    const [isChangeTitle, setIsChangeTitle] = useState<any>(false)
    const [isChangeTitleTask, setIsChangeTitleTask] = useState<any>(false)
    const [titleTask , setTitleTask] = useState<any>('')
    const [title, setTitle] = useState<any>(currCtagory?.title)
    let currImg: ImageSourcePropType = 0
    const [description, setDescription] = useState<any>('')
    const [deadLine, setDeadline] = useState<any>()

    const {setImageCategory, changeNameCategory, setNewTask, setLastAddedTask} = TaskStore
    useEffect(() => {
        if (route.params) {
            setCurrCategory({...route.params})
        }
    }, [route.params])


    const handleIndexChanged = (el) => {
        currImg = images[el]
    }
    const saveNewTtitleHandler = () => {
        changeNameCategory(currCtagory.id, title)
        setCurrCategory({...currCtagory, title})
        setIsChangeTitle(false)
    }


    const saveTaskHandler = () => {
        const newTask = {id: generateNumericId(),
            title: titleTask,
            img: currImg ?  currImg : tree5, description: description,  isDone: false, deadline: deadLine}

        setNewTask(currCtagory.id, newTask)
        setLastAddedTask(newTask)
        setImageCategory(currCtagory.id, currImg ? currImg : tree3)
       navigation.goBack()
    }
    return (
        <BaseWrapperComponent isKeyboardAwareScrollView={true}>
            <View style={{flex: 1, width: '100%', backgroundColor: 'rgba(192,238,131,0.48)', paddingHorizontal: 10, paddingTop: 20, height: 1000}}>
                <TouchableOpacity style={{marginTop: 20}} onPress={() => {
                    navigation.goBack()
                }}>
                    <Image source={backImg}/>
                </TouchableOpacity>
                <>
                    <Text>Имя категории</Text>
                    <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 2}}>

                        {isChangeTitle ?
                            <>
                                <TextInput value={title}
                                           style={{borderBottomWidth: 1, width: '50%'}}
                                           onChangeText={(userName) => setTitle(userName)}
                                           placeholderTextColor={colors.blue}
                                />
                                <TouchableOpacity onPress={saveNewTtitleHandler}>
                                    <Image source={done}
                                           style={{width: 30, height: 30, borderRadius: 16, marginLeft: 10}}/>
                                </TouchableOpacity>
                            </>
                            :
                            <>
                                <Text style={{fontSize: 20, fontWeight: '600'}}>{currCtagory.title}</Text>
                                <TouchableOpacity onPress={() => setIsChangeTitle(true)}>
                                    <Image source={pen} style={{width: 30, height: 30}}/>
                                </TouchableOpacity>
                            </>
                        }
                    </View>

                </>
                <View style={{width: '100%', height: 250, justifyContent: 'center', alignItems: 'center'}}>
                    <Swiper
                        onIndexChanged={handleIndexChanged}
                    >
                        {images.map((image, index) => {
                            return <View key={index} style={[styles.slide]}>
                                <Image source={image} style={styles.image}/>
                            </View>
                        })}
                    </Swiper>
                </View>

                <View style={{
                    width: '100%',
                    backgroundColor: 'rgb(255,248,248)',
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    borderRadius: 20,
                    shadowColor: '#000000',
                    shadowOpacity: 0.5,
                    shadowOffset: {width: 0, height: 2},
                    shadowRadius: 4,
                    height: 300,
                    elevation: 5, // Требуется для Android
                    marginBottom: 20
                }}>
                    <Text style={{ fontWeight: '400', fontSize: 18 }}>Название задачи</Text>
                   <View style={{ flexDirection: 'row' }}>

                       {isChangeTitleTask ?
                           <>
                               <TextInput value={title}
                                          style={{borderBottomWidth: 1, width: '50%'}}
                                          onChangeText={(userName) => setTitleTask(userName)}
                                          placeholderTextColor={colors.blue}
                               />
                               <TouchableOpacity onPress={() => setIsChangeTitleTask(false)}>
                                   <Image source={done}
                                          style={{width: 30, height: 30, borderRadius: 16, marginLeft: 10}}/>
                               </TouchableOpacity>
                           </>
                           :
                           <>
                               <Text style={{fontSize: 20, fontWeight: '700'}}>{titleTask}</Text>
                               <TouchableOpacity onPress={() => setIsChangeTitleTask(true)}>
                                   <Image source={pen} style={{width: 30, height: 30}}/>
                               </TouchableOpacity>
                           </>
                       }
                   </View>
                    <TextInput
                        style={styles.textArea}
                        multiline
                        placeholder={'Описание задачи'}
                        numberOfLines={4} // Можно указать желаемое количество видимых строк
                        value={description}
                        onChangeText={(e) => setDescription(e)}
                    />

                    <View style={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20
                    }}>
                        <DataPicker saveHandler={(data) => {
                            setDeadline(data)
                        }}/>
                    </View>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10}}>
                    <TouchableOpacity onPress={saveTaskHandler}>
                        <Image source={done} style={{width: 50, height: 50, borderRadius: 20}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </BaseWrapperComponent>
    );
});
const styles = StyleSheet.create({
    textArea: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    slide: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
    },
})
export default ChangeCategoryS;
