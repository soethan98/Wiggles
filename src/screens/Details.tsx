import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavParamList } from '../../App'
import DetailsImageBackdrop from '../components/DetailsImageBackdrop'
import styles from './details.style'
import { COLORS } from '../constants'



export type DetailProps = NativeStackScreenProps<MainNavParamList, "Details">

const Details = ({ navigation, route }: DetailProps) => {
    const { dog } = route.params
    return (
        <View style = {styles.container}>
            <DetailsImageBackdrop image={dog.image} navigation={navigation} />
        </View>
    )
}


export default Details