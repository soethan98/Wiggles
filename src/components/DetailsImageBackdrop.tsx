import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import styles from './detailsImageBackdrop.style'
import Icons from 'react-native-vector-icons/Ionicons'
import { DetailProps } from '../screens/Details'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MainNavParamList } from '../../App'



type BackdropImageProps = PropsWithChildren<{
    image: ImageSourcePropType,
    navigation: NativeStackNavigationProp<MainNavParamList>

}>

const DetailsImageBackdrop = ({ image, navigation }: BackdropImageProps) => {
    return (
        <View>
            <Image source={image} style={styles.backdropContainer} />
            <TouchableOpacity style={styles.backBtn} onPress={() => {
                navigation.goBack()
            }}>
                <Icons name='arrow-back-sharp' size={24} color='#ffffff' />

            </TouchableOpacity>
            <Icons name='heart-sharp' size={24} color='#ffffff' style={styles.favBtn} />

        </View>
    )
}

export default DetailsImageBackdrop

