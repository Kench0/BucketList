import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import backImg from "../assets/images/arrow_left.png";
import tree1 from "../assets/images/tree/tree1.png";
import deleteImg from "../assets/images/delete.png";
import {BaseWrapperComponent} from "../components/baseWrapperComponent";

const DoneTaskS = ({navigation, route}) => {
    const [currentDoneTask, setCurrentDoneTask] = useState<any>({})
    useEffect(() => {
        if (route.params) {
            setCurrentDoneTask({...route.params.params})
        }
    }, [route.params])

    return (
        <BaseWrapperComponent>
            <View style={{  paddingTop: 20,flex: 1, width: '100%', backgroundColor: 'rgba(192,238,131,0.48)', paddingHorizontal: 10}}>
                <TouchableOpacity  style={{marginTop: 20}} onPress={() => navigation.goBack()}>
                    <Image source={backImg}/>
                </TouchableOpacity>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={currentDoneTask?.img ?currentDoneTask?.img : tree1}/>
                </View>
                <View style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: 'rgb(255,248,248)',
                    paddingHorizontal: 20,
                    paddingTop: 10,
                    borderRadius: 20,
                    shadowColor: '#000000',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 4,
                    elevation: 5, // Требуется для Android
                    marginBottom: 20
                }}>
                    <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>{currentDoneTask?.title}</Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'black',
                        fontWeight: '400',
                        paddingTop: 20
                    }}>{currentDoneTask?.description}</Text>
                    {
                        currentDoneTask?.deadline &&    <Text style={{
                            fontSize: 12,
                            color: 'gray',
                            fontWeight: '400',
                            position: 'absolute',
                            bottom: 20,
                            right: 20
                        }}>До {currentDoneTask?.deadline}</Text>
                    }
                </View>
            </View>
        </BaseWrapperComponent>
    );
};

export default DoneTaskS;
