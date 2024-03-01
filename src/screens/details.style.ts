import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { TColors } from "../theme/colors";



const createStyles = (colors:TColors) => StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background
    },
    storyContainer:{
        marginTop:SIZES.medium,
        marginBottom:24,
        paddingStart:SIZES.medium,
        paddingTop:SIZES.medium,

    },
    aboutMeLabel:{
        color:colors.textPrimary,
        fontSize:12,
        fontFamily:'Sailec-Regular',
        fontWeight:'400',
        paddingStart:SIZES.medium,

        
    },
    storyText:{
        color:colors.textPrimary,
        paddingTop:SIZES.medium,
        fontSize:14,
        fontFamily:'Sailec-Medium',
        lineHeight:20
    }
  
})


export default createStyles;