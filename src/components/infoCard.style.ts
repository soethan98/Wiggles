import { StyleSheet } from "react-native";
import { COLORS } from "../constants";
import { TColors } from "../theme/colors";


const createStyles =(colors:TColors) =>  StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        padding: 12,
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.surfaceDark
    },
    infoLabel: {
        fontSize:12,
        fontWeight:'500',
        fontFamily: 'Sailec-Regular',
        color:"#808080"
    },
    infoValue: {
        fontWeight:'600',
        fontSize: 16,
        fontFamily: 'Sailec-Medium',
        color:colors.textPrimary

    }
})


export default createStyles;