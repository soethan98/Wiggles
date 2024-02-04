import { StyleSheet } from "react-native";
import { SIZES } from "../constants";


const styles = StyleSheet.create({
    backdropContainer:{
        width:'100%',
        height:345,
    },
    backBtn:{
        position:'absolute',
        top:SIZES.small,
        left:SIZES.small,
        zIndex:99
    },
    favBtn:{
        position:'absolute',
        top:SIZES.medium,
        right:SIZES.medium,
        zIndex:99
    }
})

export default styles;