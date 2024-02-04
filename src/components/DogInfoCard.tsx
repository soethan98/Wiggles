import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dog } from '../data/Dog'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../constants'
import GenderTag from './GenderTag'

type dogInfoProps = {
    dog: Dog
}

const DogInfoCard = ({ dog }: dogInfoProps) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style = {styles.nameText}>{dog.name}</Text>
                <View style={styles.locationContent}>
                    <Icon name='location-on' size={16} color={COLORS.RED} />
                    <Text style={[styles.locationText, styles.baseText]}>{dog.location}</Text>
                </View>
                <View  style = {{height:12}}/>
                <Text style={styles.baseText}>12 min ago</Text>

            </View>
            <View style= {styles.activityContainer}>
                <GenderTag gender={dog.gender}/>
                <Text style = {[styles.baseText]}>{dog.age} yrs| {dog.gender}</Text>

            </View>

        </View>
    )
}

export default DogInfoCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    locationContent: {
        flexDirection: 'row',
        paddingTop: 12
    },
    baseText: {
        fontSize: 12,
        fontFamily: 'Sailec-Medium',
        fontWeight: 'normal',
        color: COLORS.pinkText,
    },
    locationText: {
        paddingLeft: 8,
        paddingRight: 12,

    },
    nameText: {
        fontWeight: 'bold',
        fontFamily: 'Sailec-Bold',
        fontSize: 24,
        color: COLORS.pinkText,

    },
    activityContainer:{
        justifyContent:'space-between'
    }
})