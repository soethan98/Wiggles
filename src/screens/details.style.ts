import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.blueBGNight
    },
    storyContainer:{
        marginTop:SIZES.medium,
        marginBottom:24,
        paddingStart:SIZES.medium,
        paddingTop:SIZES.medium,

    },
    aboutMeLabel:{
        color:COLORS.pinkText,
        fontSize:12,
        fontFamily:'Sailec-Regular',
        fontWeight:'400',
        paddingStart:SIZES.medium,

        
    },
    storyText:{
        color:COLORS.pinkText,
        paddingTop:SIZES.medium,
        fontSize:14,
        fontFamily:'Sailec-Medium',
        lineHeight:20
    }
  
})


export default styles;