import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {
    console.log(props)
    console.log(props.nome)
    console.log(props.idade)

  return (
    <View>
      <Text style ={{fontSize:40}}>Perfil</Text>
    </View>
  )
}

const styles = StyleSheet.create({})