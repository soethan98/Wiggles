import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants'


const styles = StyleSheet.create({
    appBarContainer:{
        flexDirection:'row',
        alignItems:'center',
        margin:SIZES.medium

    },
    appBarTextContainer:{
        flexDirection:'column',
        justifyContent:'center',
        padding:SIZES.medium,
        flex:1

    },
    appBarTitle:{
        color:COLORS.pinkText,
        fontFamily:'Sailec-Bold',
        fontWeight:'600',
        fontSize:24
      
    },
    appBarSubtitle:{
        color:COLORS.pinkText,
        fontFamily:'Sailec-Regular',
        fontWeight:'500',
        fontSize:16
    },
    iconContainer:{
        marginRight:SIZES.medium
    }
})

export default styles