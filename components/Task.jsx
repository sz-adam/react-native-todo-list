import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import TaskModal from './TaskModal';
import { ColorContext } from '../context/ColorContext';

const TaskItem = ({ item, deleteTask, modifyTask }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modifiedTask, setModifiedTask] = useState('');
  const { colors, selectedColor } = useContext(ColorContext);

  const [taskColor, setTaskColor] = useState(null);
  const [colorName, setColorName] = useState('');

  useEffect(() => {
    if (!taskColor && selectedColor) {
      setTaskColor(selectedColor);
    }
  }, [selectedColor]);
  
  useEffect(() => {
    const color = colors.find((color) => color.color === taskColor);
    if (color) {
      setColorName(color.title);
    } else {
      setColorName('');
    }
  }, [taskColor, colors]);

  const handleSave = () => {
    modifyTask(item.id, modifiedTask, taskColor);
    setModalVisible(false);
  };

  const handleTaskColorPress = (color) => {
    if (!taskColor) {
      setTaskColor(color);
    }
  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={[
          styles.container,
          { backgroundColor: taskColor },
        ]}
        activeOpacity={0.6}
        onPress={() => handleTaskColorPress(colors)}
      >
        <Text style={styles.task}>{item.task}</Text>
        {colorName && (
          <Text style={styles.colorName}>{colorName}</Text>
        )}
        <View style={styles.iconContainer}>
          <AntDesign
            name="delete"
            size={24}
            color="black"
            onPress={() => deleteTask(item.id)}
            style={styles.icon}
          />
          <MaterialCommunityIcons
            name="update"
            size={24}
            color="black"
            onPress={() => {
              setModifiedTask(item.task);
              setModalVisible(true);
            }}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
      <TaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modifiedTask={modifiedTask}
        setModifiedTask={setModifiedTask}
        handleSave={handleSave}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'column',
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  task: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 10,
    padding: 15,
    position: 'relative',
  },
  colorName: {
    fontSize: 12,
    color: '#fff',
    position: 'absolute',
    top: 10,
    left: 10,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 30,
    color: '#fff',
  },
});

export default TaskItem;
