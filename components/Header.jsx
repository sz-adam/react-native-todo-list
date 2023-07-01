import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Mobil Todo List</Text>
    </View>
  )
}


const styles = StyleSheet.create({
   header: {
    paddingTop:30,
    backgroundColor:'blue',
    height:80
   },
   title:{
    textAlign:'center',
    color:'white',
    fontSize:20,
    fontStyle:'italic'
   }
  })