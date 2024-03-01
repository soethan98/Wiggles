import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { TColors } from "../theme/colors";


const createStyles = (colors:TColors) => StyleSheet.create({
    container:{
        padding:SIZES.medium
    },
    contentContainer:{
        paddingTop:SIZES.small,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'

    },
    profileImage:{
        width:75,
        height:75,
        borderRadius:37
    },
    ownerDetail:{
        flex:1,
        alignSelf:'center',
        paddingStart:SIZES.medium
    },
    ownerName:{
        color:colors.textPrimary,
        fontFamily: 'Sailec-Medium',
        fontWeight: '600',
        fontSize: 14
    },
    ownerRole:{
        color:colors.textPrimary,
        fontFamily: 'Sailec-Medium',
        fontWeight: '400',
        fontSize: 14
    },
   
    messengerContainer:{
        backgroundColor:COLORS.blue,
        alignSelf:'baseline',
        padding:SIZES.small,
        borderRadius:24
    }
})


export default createStyles