import AsyncStorage from "@react-native-async-storage/async-storage";

export const deviceStorage = {

    async saveItem(key: string, value: any) {
        try {
           return await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async getItem(key: string) {
        try {
           return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    }

};


