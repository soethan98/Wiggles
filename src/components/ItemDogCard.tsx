

import { Text, View, Image } from 'react-native'
import React,{PropsWithChildren} from 'react'
import styles from './itemDogCard.style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLORS } from '../constants'
import GenderTag from './GenderTag'
import { Dog } from '../data/Dog'



type  ItemDogCardProps = PropsWithChildren<{
  dog:Dog
}>

const ItemDogCard = ({dog}:ItemDogCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        <Image source={dog.image} style={styles.image} />
        <View style={styles.detailsText}>
          <Text style = {styles.nameText}>{dog.name}</Text>
          <Text style = {styles.activityText}>{dog.age} yrs| {dog.gender}</Text>
          <View style = {styles.locationContent}>
            <Icon name='location-on' size={16} color={COLORS.RED} />
            <Text style  = {styles.locationText}>{dog.location}</Text>
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

