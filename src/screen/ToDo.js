import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ToDo() {
  return (
    <SafeAreaView>
    <View style = {{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>ToDo</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})