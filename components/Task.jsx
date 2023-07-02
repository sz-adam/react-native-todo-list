import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import TaskModal from './TaskModal';

const TaskItem = ({ item, deleteTask, modifyTask }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modifiedTask, setModifiedTask] = useState('');

  const handleSave = () => {
    modifyTask(item.id, modifiedTask);
    setModalVisible(false);

  };

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.container} activeOpacity={0.6}>
        <Text style={styles.task}>{item.task}</Text>
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
    backgroundColor: '#FFFFFF',
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
    color: '#333333',
    marginRight: 10,
    padding: 15,
    position:'relative',
  },
  iconContainer: {
    position:'absolute',
    bottom:5,
   flexDirection:'row', 
  },
  icon: {
    marginHorizontal: 30,
  },
});
export default TaskItem;
