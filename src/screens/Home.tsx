import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavParamList } from '../../App'
import styles from './home.style'
import TopBar from '../components/TopBar'



type HomeProps = NativeStackScreenProps<MainNavParamList, "Home">

export default function Home({ navigation }: HomeProps) {
    return (
        <View style = {styles.mainContainer}>
           <TopBar/>
        </View>
    )
}




