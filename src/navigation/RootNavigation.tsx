import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {observer} from "mobx-react-lite";
import {NavigationContainer} from "@react-navigation/native";
import {routerConstants} from '../constants/routerConstants';
import MainS from "../screen/Main";
import GardenS from "../screen/GardenS";
import DoneTaskS from "../screen/DoneTaskS";
import SelectCategoryS from "../screen/SelectCategoryS.";
import ChangeCategory from "../screen/changeCreateTaskCategory";
import CategoryTasksListS from "../screen/CategoryTasksListS";
import ViewTaskS from "../screen/ViewTask";
import userS from "../screen/userS";
import RateAppS from "../screen/RateAppS";
import NewsS from "../screen/NewsS";

const RootStack = createNativeStackNavigator()
const RootNavigation = observer(() => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.MAIN}
                    component={MainS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.news}
                    component={NewsS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.rateApp}
                    component={RateAppS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.garden}
                    component={GardenS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.selectCategory}
                    component={SelectCategoryS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.changeCategory}
                    component={ChangeCategory}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.categoryTasksList}
                    component={CategoryTasksListS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.ViewTaskS}
                    component={ViewTaskS}
                />
                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.user}
                    component={userS}
                />

                <RootStack.Screen
                    options={{headerShown: false}}
                    name={routerConstants.doneTask}
                    component={DoneTaskS}
                />
            </RootStack.Navigator>
        </NavigationContainer>
    );
});

export default RootNavigation;
