import { View, Text } from 'react-native'
import React from 'react'

const Item = (props: any) => {
  return (
    <View style = {{width: '70%', marginTop: 10, borderRadius: 5, borderWidth: 2}}>
      <Text>Item</Text>
    </View>
  )
}

export default Item