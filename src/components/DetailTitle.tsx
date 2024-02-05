

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const DetailTitle = ({title}: {title:string}) => {
    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default DetailTitle

const styles = StyleSheet.create({
    titleText: {
        color: COLORS.pinkText,
        fontFamily: 'Sailec-Medium',
        fontWeight: '600',
        fontSize: 16
    },
})