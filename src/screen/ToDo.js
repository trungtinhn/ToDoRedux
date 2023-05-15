import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Item from '../component/Item'
import { Image } from 'react-native-elements'
import { add } from '../image'

export default function ToDo({navigation}) {
  const [Check, SetCheck] = useState(true)
  return (
    <SafeAreaView>
    <View style = {{flexDirection: 'row', marginTop: 20, justifyContent: 'center'}}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>ToDo</Text>
    </View>
    <View style = {{justifyContent: 'center', alignItems: 'center'}}>
    <Item
      Number = '1'
      Name = "To Do1"
      Check = {Check}
      Date = "1/12/2220"
      onPress = {()=> SetCheck(!Check)}
    ></Item>
    </View>
    <View style = {{ marginTop: 30, marginLeft: '40%'}}>
    <TouchableOpacity 
    onPress={()=>{navigation.navigate('Details')}}
    style = {{width: 40, height: 40}}>
      <Image source={add}
      resizeMode='contain'
      style = {{width: '100%', height: '100%'}}
      >

      </Image>
    </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})