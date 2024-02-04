import { StyleSheet } from "react-native";
import { COLORS } from "../constants";


const styles = StyleSheet.create({
    container: {
        width: 90,
        height: 90,
        padding: 12,
        borderRadius: 12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#162544'
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
        color:COLORS.text

    }
})


export default styles;