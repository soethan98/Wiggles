import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './genderTag.style'

export default function GenderTag() {
  return (
    <View style = {styles.chipContainer}>
      <Text style = {styles.chipText}>Male</Text>
    </View>
  )
}

