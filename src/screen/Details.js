import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Details() {
  return (
    <SafeAreaView>
    <View style = {{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})