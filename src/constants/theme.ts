import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');


const COLORS = {
    purple200:'#BB86FC',
    purple500:'#6200EE',
    purple700:'#3700B3',
    teal200:'#03DAC5',
    blueBG:'#F4F7FD',
    blueBGNight:'#0C1B3A',
    blueText:'#1E3054',
    pinkText:'#F5CAC9',
    card:'#FFFFFF',
    cardNight:'#162544',
    RED:'#EB5757',
    blue:"#006AF6",
   text:'#F5CAC9',

}

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    height,
    width
  };
  


  export {COLORS,SIZES};