

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { TColors } from '../theme/colors'
import useStyles from '../theme/useStyles'

const DetailTitle = ({title}: {title:string}) => {
    const {colors,styles} = useStyles(createStyles)
    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default DetailTitle

const createStyles = (colors:TColors) => StyleSheet.create({
    titleText: {
        color: colors.textPrimary,
        fontFamily: 'Sailec-Medium',
        fontWeight: '600',
        fontSize: 16
    },
})