import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const Item = (props:any) => {
  return (
    <View style = {{width: '70%', marginTop: 10, borderRadius: 5, borderWidth: 2}}>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style = {{fontSize: 25}}>#{props.Number}</Text>
      <Text style = {{fontSize: 25}}>{props.Name}</Text>
      <TouchableOpacity 
      onPress={props.onPress}
      style = {{width: 20, height: 20, borderWidth: 1, marginTop: 7, marginRight: 5, alignItems: 'center'}}
      >
        {props.Check && <Text>V</Text>}
      </TouchableOpacity>
      </View>
      <Text style = {{fontSize: 25}}>{props.Date}</Text>
    </View>
  )
}
export default Item