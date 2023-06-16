import React, {useEffect, useState} from 'react';
import {BaseWrapperComponent} from "../components/baseWrapperComponent";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import backImg from "../assets/images/arrow_left.png";
import TaskStore from "../store/AuthStore/taskStore";

const NewsS = ({navigation, route}: any) => {
    const [currCtagory, setCurrCategory] = useState<any>({})
    const {dataUsefulArticles} = TaskStore
    useEffect(() => {
        if (route.params) {
            setCurrCategory({...route.params})
        }
    }, [route.params])
    return (
        <BaseWrapperComponent isKeyboardAwareScrollView={true}>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: 30}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}
                                      style={{flexDirection: 'row', alignItems: 'center', marginRight: 30}}>
                        <Image source={backImg}/>
                    </TouchableOpacity>
                </View>
                    <View style={{ alignItems: 'center' }}>
                        <View>
                            <Text style={{fontSize: 24, color: 'white', fontWeight: '600'}}>{currCtagory?.title}</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 40, paddingHorizontal: 20, flex: 1, width: '100%' }}>
                            <Text style={{ color: 'rgb(0,0,0)', fontSize: 20 }}>
                                {currCtagory.description}
                            </Text>
                        </View>
                    </View>

            </View>
        </BaseWrapperComponent>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: 'rgba(202,203,192,0.64)',
        flex: 1,
        paddingBottom: 50
    },
})
export default NewsS;
