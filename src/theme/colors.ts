export type ColorTheme = {
    primary: string;
    secondary: string;
    textSecondary: string;
    textPrimary: string;
    background: string;
    surface: string;
    onSurface: string;
    surfaceDark:string;

}

const sharedColors = {
    black: '#000000',
    white: '#FFFFFF',
};


type SharedColors = typeof sharedColors;
export type TColors = ColorTheme & SharedColors;



type ColorPalettes = {
    light: TColors;
    dark: TColors;
}
const Colors: ColorPalettes = {
    light: {
        primary: '#080811',
        secondary: '#161629',
        textPrimary: '#1E3054',
        textSecondary: '#67686E',
        surface:'#FFFFFF',
        onSurface:'#1E3054',
        background:'#F4F7FD',
        surfaceDark:'#F9F9F9',
        ...sharedColors,
    },
    dark: {
        primary: '#F8F8F8',
        secondary: '#E4E4E4',
        textPrimary: '#F5CAC9',
        textSecondary: '#9D5DB0',
        surface:'#162544',
        onSurface:'#F5CAC9',
        background:'#0C1B3A',
        surfaceDark:'#162544',
        ...sharedColors,
    }
}


export default Colors;


// blueBG:'#F4F7FD',
// blueBGNight:'#0C1B3A',