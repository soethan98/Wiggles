import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './ownerInfo.style'
import Icons from 'react-native-vector-icons/Fontisto'
import Icon from 'react-native-vector-icons/Fontisto'
import { COLORS } from '../constants'
import DetailTitle from './DetailTitle'


export default function OwnerInfo() {
    return (
        <View style={styles.container}>
            <DetailTitle title='Owner Info' />
            <View style={styles.contentContainer}>
                <Image source={require('../../assets/images/owner.jpg')} style = {styles.profileImage} />
                <View style = {styles.ownerDetail}>
                    <Text style={styles.ownerName}>David Berlin</Text>
                    <Text style={styles.ownerRole}>Socialist & Developer</Text>
                </View>
                <View style = {styles.messengerContainer}>
                <Icon name='messenger' size={18} color={'#ffffff'}/>

                </View>
            </View>
        </View>
    )
}

