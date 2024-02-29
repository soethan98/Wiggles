import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainNavParamList } from '../../App'
import styles from './home.style'
import TopBar from '../components/TopBar'
import GenderTag from '../components/GenderTag'
import ItemDogCard from '../components/ItemDogCard'
import dogs from '../data/Dogs'
import useStyles from '../theme/useStyles'
import createStyles from './home.style'



type HomeProps = NativeStackScreenProps<MainNavParamList, "Home">

export default function Home({ navigation }: HomeProps) {

    const {colors,styles} = useStyles(createStyles)
    return (
        <View style = {styles.mainContainer}>
           <TopBar/>
           <Text style = {styles.nearByText}>Nearby results</Text>
           <FlatList
           data={dogs} 
        keyExtractor={item => item.id.toString()}
           renderItem={({item}) => (
            <Pressable onPress={() => {
                navigation.push("Details",{
                    dog:item
                })
            }}>
            <ItemDogCard dog={item}/>

            </Pressable>
           )}
          />
        </View>
    )
}




