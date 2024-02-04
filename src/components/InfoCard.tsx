import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './infoCard.style'


type InfoCardProps = {
    title:string,
    value:string
}

 const InfoCard = ({title,value}:InfoCardProps) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.infoValue}>{value}</Text>
      <View style = {{height:4}}/>
      <Text style = {styles.infoLabel}>{title}</Text>
    </View>
  )
}




export default InfoCard