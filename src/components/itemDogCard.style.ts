import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { TColors } from "../theme/colors";


const createStyles = (colors:TColors) => StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.surface,
        padding: SIZES.xSmall,
        borderRadius: SIZES.medium,
        margin: SIZES.medium
    },
    contentContainer: {
        flexDirection: 'row',

    },

    image: {
        width: 80,
        height: 80,
        borderRadius: SIZES.medium
    },
    detailsText: {
        flex:1,
        paddingLeft: 8,
        justifyContent: 'space-evenly'
    },


    nameText: {
        fontSize: 16,
        fontFamily: 'Sailec-Medium',
        fontWeight: '500',
        color: colors.textPrimary
    },
    activityText: {
  
        paddingTop:12

    },
    locationContent: {
        flexDirection: 'row',
        paddingTop: 12
    },
    locationText: {
        paddingLeft: 8,
        paddingRight: 12,
     
    },
    genderTag: {
        justifyContent:'space-between'
    },
 
    baseText:{
        fontSize: 12,
        fontFamily: 'Sailec-Medium',
        fontWeight: 'normal',
        color: colors.textPrimary,
    }

})


export default createStyles