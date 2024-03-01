import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './infoCard.style'
import createStyles from './infoCard.style'
import useStyles from '../theme/useStyles'


type InfoCardProps = {
    title:string,
    value:string
}

 const InfoCard = ({title,value}:InfoCardProps) => {
  const {colors,styles} = useStyles(createStyles)
  return (
    <View style = {styles.container}>
      <Text style = {styles.infoValue}>{value}</Text>
      <View style = {{height:4}}/>
      <Text style = {styles.infoLabel}>{title}</Text>
    </View>
  )
}




export default InfoCard