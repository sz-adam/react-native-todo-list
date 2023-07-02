import React, { useState, useContext } from 'react';
import { View, StyleSheet, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { ColorContext } from '../context/ColorContext';

export default function AddTask({ addTask }) {
  const [text, setText] = useState('');
  const { colors, selectedColor, handleColorPress } = useContext(ColorContext);

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
       {selectedColor && (
        <>
          <TextInput
            style={styles.input}
            onChangeText={changeHandler}
            placeholder="Add Task"
            value={text}
          />
          <Button
            title="Add Task"
            color={selectedColor }
            onPress={() => {
              addTask(text);
              setText('');
            }}
          />
        </>
      )}
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorBox,
              { backgroundColor: color.color },
              selectedColor === color.color && styles.selectedColor,
            ]}
            onPress={() => handleColorPress(color.color)}
          >
            <View style={styles.colorBoxContent}>
              <Text style={styles.colorTitle}>{color.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'green',
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  colorBox: {
    width: 50,
    height: 50,
    marginHorizontal: 8,
    borderRadius:50,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: 'black',
  },
  colorBoxContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorTitle: {
    textAlign: 'center',
    color:'white',
    fontWeight: 'bold',   
  },
});
