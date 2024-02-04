

import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './itemDogCard.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../constants'
import GenderTag from './GenderTag'

const ItemDogCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Image source={require('../../assets/images/orange_dog.png')} style={styles.image} />
        <View style={styles.detailsText}>
          <Text style = {styles.nameText}>Parkinson</Text>
          <Text style = {styles.activityText}>2yrs| Playful</Text>
          <View style = {styles.locationContent}>
            <Icon name='location-on' size={16} color={COLORS.RED} />
            <Text style  = {styles.locationText}> 381 away </Text>
          </View>
        </View>
        <View style= {styles.genderTag}>
          <GenderTag/>
          <Text style = {styles.agoText}>12 min ago</Text>
        </View>
      </View>

    </View>
  )
}

export default ItemDogCard

