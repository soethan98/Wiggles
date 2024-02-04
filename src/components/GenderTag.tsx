import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import styles from './genderTag.style'
import { COLORS } from '../constants'

type GenderProps = PropsWithChildren<{
  gender: string
}>
export default function GenderTag({ gender }: GenderProps) {


  return (
    <View style={[styles.chipContainer,
    {
      backgroundColor: gender.toLowerCase() === 'male' ? "rgba(0,106,246,0.2)" : 'rgba(235, 87, 87, 0.2)'
    }]}>
      <Text style={[styles.chipText, {
        color: gender.toLowerCase() === 'male' ? COLORS.blue : COLORS.RED
      }]}>{gender}</Text>
    </View>
  )
}

