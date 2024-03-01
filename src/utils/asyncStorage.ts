import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const defaultTheme = 'default-theme'
const writeTheme = async (value: string) => {
    try {
        await AsyncStorage.setItem(defaultTheme, value);
    } catch (e) {
        Alert.alert("Error", (e as Error).message)

    }
};


const getDefaultTheme = async () => {
    try {
        return await AsyncStorage.getItem(defaultTheme);
    } catch (e) {

        Alert.alert("Error", (e as Error).message)
    }
}

export { writeTheme, getDefaultTheme };