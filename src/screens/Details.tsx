import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavParamList } from '../../App'



type DetailProps = NativeStackScreenProps<MainNavParamList, "Details">

export default function Details() {
    return (
        <View>
            <Text>Details</Text>
        </View>
    )
}

const styles = StyleSheet.create({})