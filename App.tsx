import {StatusBar} from 'expo-status-bar';
import RootNavigation from "./src/navigation/RootNavigation";
import {SafeAreaView, View} from "react-native";


export default function App() {

    return (
        <>
            <StatusBar hidden={false} style={'auto'} animated={true} translucent={true}/>
            <RootNavigation/>
        </>
    );
}

