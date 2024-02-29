import Colors, { TColors } from "./colors";
import React, { PropsWithChildren, createContext, useState } from 'react';


type AppThemeContextType = {
    colors: TColors;
    applyColors: (colors: TColors) => void
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>({
    colors: Colors.light,
    applyColors: (colors:TColors) => {}
});



const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [colors, setColors] = useState<TColors>(Colors.light);

    const applyColors = (colorTheme: TColors) => {
        setColors(colorTheme)
    }

    const value = {
        colors: colors,
        applyColors: applyColors
    };

    return (<AppThemeContext.Provider value={value}>
        {children}
    </AppThemeContext.Provider>);
}


export default AppThemeProvider;
