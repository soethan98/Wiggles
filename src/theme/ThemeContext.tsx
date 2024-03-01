import Colors, { TColors } from "./colors";
import React, { PropsWithChildren, createContext, useState } from 'react';


type AppThemeContextType = {
    color: TColors;
    applyColor: (colors: TColors) => void
}

export const AppThemeContext = createContext<AppThemeContextType | undefined>(undefined);



const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [color, setColor] = useState<TColors>(Colors.light);

    const applyColor = (colorTheme: TColors) => {
        setColor(colorTheme)
    }

    const value = {
        color: color,
        applyColor: applyColor
    };

    return (<AppThemeContext.Provider value={value}>
        {children}
    </AppThemeContext.Provider>);
}


export default AppThemeProvider;
