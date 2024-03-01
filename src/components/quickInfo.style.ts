import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { TColors } from "../theme/colors";

const createStyles =(colors:TColors) =>  StyleSheet.create({

  container: {
    padding: SIZES.medium
  },
  infoCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: SIZES.medium
  }
})

export default createStyles