import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {

    const nome = "Raylanne"
    const idade = 21
  
    return (
        <View>
            <Text>JavaScript Componente</Text>
            <Text>NOME: {nome}</Text>
            <Text>IDADE: {idade}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})