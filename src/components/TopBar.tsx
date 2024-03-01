import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import styles from './topbar.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../constants'
import useStyles from '../theme/useStyles'
import createStyles from './topbar.style'
import { AppThemeContext } from '../theme/ThemeContext'
import Colors from '../theme/colors'
import useColors from '../theme/hooks'

const TopBar = () => {
    const { color, applyColor } = useColors();
    const { colors, styles } = useStyles(createStyles)
    return (
        <View style={styles.appBarContainer}>
            <View style={styles.appBarTextContainer}>
                <Text style={styles.appBarTitle}>Hey Spikey</Text>
                <Text style={styles.appBarSubtitle}>Adopt a new friend near you</Text>
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {
                applyColor(color === Colors.light ? Colors.dark : Colors.light)
            }}>
                {
                     <Icon name= {color === Colors.light ? 'lightbulb-on-outline' : 'lightbulb-outline'} size={24} color={colors.textPrimary} />



                }

            </TouchableOpacity>
        </View>
    )
}

export default TopBar

