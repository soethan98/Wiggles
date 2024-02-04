import { StyleSheet } from "react-native";
import { COLORS } from "../constants";


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:COLORS.blueBGNight
    },
    nearByText : {
        fontSize: 14,
        fontFamily: 'Sailec-Bold',
        fontWeight: '500',
        color: COLORS.pinkText,
        marginStart:16,
        marginTop:16,
        
    }
})


export default styles;