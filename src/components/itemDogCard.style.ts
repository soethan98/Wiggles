import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: COLORS.cardNight,
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
        color: COLORS.pinkText
    },
    activityText: {
        fontSize: 12,
        fontFamily: 'Sailec-Medium',
        fontWeight: 'normal',
        color: COLORS.pinkText,
        paddingTop:12

    },
    locationIcon: {},
    locationContent: {
        flexDirection: 'row',
        paddingTop: 12
    },
    locationText: {
        paddingLeft: 8,
        paddingRight: 12,
        fontSize: 12,
        fontFamily: 'Sailec-Medium',
        fontWeight: 'normal',
        color: COLORS.pinkText,
    },
    genderTag: {
        justifyContent:'space-between'
    },
    agoText:{
        fontSize: 12,
        fontFamily: 'Sailec-Medium',
        fontWeight: 'normal',
        color: COLORS.pinkText,
    }

})


export default styles