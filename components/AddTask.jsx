import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

export default function AddTask({ addTask }) {
  const [text, setText] = useState('')

  const changeHandler = (value) => {
    setText(value)
  }
  return (
    <View>
      <TextInput style={styles.input} onChangeText={changeHandler}
        placeholder='Add Task'
        value={text}
      />
      <Button title='Add Task' color='blue' onPress={() => {
        addTask(text);
        setText("");
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'green'

  }
})