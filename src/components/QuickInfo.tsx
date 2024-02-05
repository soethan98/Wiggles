import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './quickInfo.style'
import InfoCard from './InfoCard'
import { Dog } from '../data/Dog'
import DetailTitle from './DetailTitle'

type QuickInfoProps = {
  dog:Dog
}

const QuickInfo = ({dog}:QuickInfoProps) => {
  return (
    <View style = {styles.container}>
      <DetailTitle title="QuickInfo"/>
      <View style = {styles.infoCardContainer}>
        <InfoCard title='Age' value={dog.age.toString().concat(' yrs')}/>
        <InfoCard title='Color' value={dog.color}/>
        <InfoCard title='Weight' value={dog.weight.toString().concat('Kg')}/>
      </View>
    </View>
  )
}

export default QuickInfo

