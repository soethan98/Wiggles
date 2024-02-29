import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { TColors } from '../theme/colors'


const createStyles = (colors:TColors) =>  StyleSheet.create({
    appBarContainer:{
        flexDirection:'row',
        alignItems:'center',
        margin:SIZES.medium,

    },
    appBarTextContainer:{
        flexDirection:'column',
        justifyContent:'center',
        padding:SIZES.medium,
        flex:1

    },
    appBarTitle:{
        color:colors.textPrimary,
        fontFamily:'Sailec-Bold',
        fontWeight:'600',
        fontSize:24
      
    },
    appBarSubtitle:{
        color:colors.textPrimary,
        fontFamily:'Sailec-Regular',
        fontWeight:'500',
        fontSize:16
    },
    iconContainer:{
        marginRight:SIZES.medium
    }
})

export default createStyles