import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles =StyleSheet.create({
  label:{
    color:COLORS.pinkText,
    fontFamily: 'Sailec-Medium',
    fontWeight: '600',
    fontSize: 16
    },
  container:{
    padding:SIZES.medium
  },
  infoCardContainer:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    paddingTop:SIZES.medium
  }
})

export default styles