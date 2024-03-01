import { StyleSheet } from "react-native";
import { TColors } from "./colors";
import { useContext } from "react";
import { AppThemeContext } from "./ThemeContext";

interface ColorType{
    color:TColors;
    applyColor:(colors:TColors) => void;
}


const useColors = ():ColorType => {
    const store = useContext(AppThemeContext);
    if (!store) {
         throw new Error("useColors must be defined.");
        
    }
    return {
        color:store.color,
        applyColor:store.applyColor
    };
};

export default useColors;