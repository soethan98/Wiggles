export type ColorTheme = {
    primary: string;
    secondary: string;
    textSecondary: string;
    textPrimary: string;
    background: string;
    onBackground:string;
    surface: string;
    onSurface: string;

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
        onBackground:'',
        onSurface:'#1E3054',
        background:'#F4F7FD',
        ...sharedColors,
    },
    dark: {
        primary: '#F8F8F8',
        secondary: '#E4E4E4',
        textPrimary: '#F5CAC9',
        textSecondary: '#9D5DB0',
        surface:'#162544',
        onBackground:'',
        onSurface:'#F5CAC9',
        background:'#0C1B3A',
        ...sharedColors,
    }
}


export default Colors;


// blueBG:'#F4F7FD',
// blueBGNight:'#0C1B3A',