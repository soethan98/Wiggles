import { StyleSheet } from "react-native";
import { COLORS } from "../constants";
import { TColors } from "../theme/colors";


const createStyles =(colors:TColors) =>  StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:colors.background
    },
    nearByText : {
        fontSize: 14,
        fontFamily: 'Sailec-Bold',
        fontWeight: '500',
        color: colors.textPrimary,
        marginStart:16,
        marginTop:16,
        
    }
})


export default createStyles;