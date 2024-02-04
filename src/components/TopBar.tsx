import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './topbar.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../constants'

const TopBar = () => {
    return (
        <View style={styles.appBarContainer}>
            <View style={styles.appBarTextContainer}>
                <Text style={styles.appBarTitle}>Hey Spikey</Text>
                <Text style={styles.appBarSubtitle}>Adopt a new friend near you</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name='lightbulb-on-outline' size={24} color={'#FFFFFF'} />

            </TouchableOpacity>
        </View>
    )
}

export default TopBar

