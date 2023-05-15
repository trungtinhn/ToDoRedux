import { Button,TouchableOpacity, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function Details() {
  const [date, setdate] = useState(new Date());
  const [mode, setmode] = useState('date');
  const [show, setshow] = useState(false);
  const [test, settest] = useState('Empty');
  const [Check, setCheck] = useState(false);
  const onPress = () =>{

  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setshow(Platform.OS === 'ios')
    setdate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    settest(fDate);
  }
  const showMode = (currentDate) => {
    setshow(true);
    setmode(currentDate);
  }
  return (
    <SafeAreaView>
    <View style = {{flexDirection: 'row', marginTop: 40, justifyContent: 'center'}}>
      <Text style = {{fontSize: 30, fontWeight: 'bold'}}>Details</Text>
    </View>
    <View style = {{marginLeft: 20}}>
    <Text style = {styles.test}>Title</Text>
    <TextInput style = {styles.button}></TextInput>
    <Text style = {styles.test}>Description</Text>
    <TextInput style = {styles.button}></TextInput>
    <Text style = {styles.test}>Time</Text>
    <View style = {{flexDirection: 'row'}}>
      <Text style = {{borderWidth: 1, width: '55%', height: 50, borderRadius: 3,textAlign: 'center', fontSize: 25}}>{test}</Text>
    <Button 
      title='Choose Date'
      onPress={() => showMode('date')}
    ></Button>
    </View>
    <View style = {{flexDirection: 'row', marginLeft: 30}}>
      <Text style = {styles.test}>Mark are done: </Text>
      <TouchableOpacity 
      onPress={() => setCheck(!Check)}
      style = {{width: 20, height: 20, borderWidth: 1, marginTop: 24, marginRight: 5, alignItems: 'center'}}
      >
        {Check && <Text>V</Text>}
      </TouchableOpacity>
    </View>
    </View>
    <View style = {{width: '100%', marginTop: 20, justifyContent: 'center', flexDirection: 'row'}}>
    <Button
      title='Save'
      onPress={onPress}
      
    ></Button>
    </View>
    <View>
      {show && (
        <DateTimePicker
          testID='datetimepicker'
          value={date}
          mode={mode}
          display='default'
          onChange={onChange}
        ></DateTimePicker>
      )}
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button:{
    borderWidth: 3,
    width: '80%',
    borderRadius: 5,
    fontSize: 25
  },
  test:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  }
})