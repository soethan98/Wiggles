import { StyleSheet } from "react-native";
import { TColors } from "./colors";
import { useContext } from "react";
import { AppThemeContext } from "./ThemeContext";

interface ColorType{
    colors:TColors;
    applyColors:(colors:TColors) => void;
}


const useColors = ():ColorType => {
    const store = useContext(AppThemeContext);
    if (!store) {
         throw new Error("useColors must be defined.");
        
    }
    return {
        colors:store.colors,
        applyColors:store.applyColors
    };
};

export default useColors;