import { Alert } from "react-native";
import { getDefaultTheme, writeTheme } from "../utils/asyncStorage";
import Colors, { TColors } from "./colors";
import React, { PropsWithChildren, createContext, useState, useEffect, useLayoutEffect } from 'react';


type AppThemeContextType = {
    color: TColors;
    applyColor: (colors: TColors) => void
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);

const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [color, setColor] = useState<TColors>(Colors.light);

    const applyColor = (colorTheme: TColors) => {
        setColor(colorTheme)
        writeTheme(colorTheme === Colors.light ? 'light' : 'dark')
    }

    const value = {
        color: color,
        applyColor: applyColor
    };

    const fetchedTheme = async () => {
        try {

            const defaultTheme = await getDefaultTheme()
            if (defaultTheme !== null) {
                setColor(defaultTheme === 'light' ? Colors.light : Colors.dark)
            }
        } catch (error) {
            Alert.alert("Error", (error as Error).message);
        }
    }
    useLayoutEffect(() => {
        fetchedTheme()
    }, [])


    return (<AppThemeContext.Provider value={value}>
        {children}
    </AppThemeContext.Provider>);
}


export default AppThemeProvider;
