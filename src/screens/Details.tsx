import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavParamList } from '../../App'
import DetailsImageBackdrop from '../components/DetailsImageBackdrop'
import styles from './details.style'
import { COLORS } from '../constants'
import InfoCard from '../components/InfoCard'
import DogInfoCard from '../components/DogInfoCard'
import QuickInfo from '../components/QuickInfo'
import OwnerInfo from '../components/OwnerInfo'
import DetailTitle from '../components/DetailTitle'



export type DetailProps = NativeStackScreenProps<MainNavParamList, "Details">

const Details = ({ navigation, route }: DetailProps) => {
    const { dog } = route.params
    return (
        <ScrollView style={styles.container}>
            <View>
                <DetailsImageBackdrop image={dog.image} navigation={navigation} />
                <DogInfoCard dog={dog}/>
                <View style = {styles.storyContainer}>
                    <DetailTitle  title='About Me' />
                    <Text style = {styles.storyText}>{dog.about}</Text>
                </View>
                <QuickInfo dog={dog} />
                <OwnerInfo />
            </View>
        </ScrollView>

    )
}


export default Details