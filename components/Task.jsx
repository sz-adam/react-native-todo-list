import React, { useState } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons';
import TaskModal from './TaskModal';

const TaskItem = ({ item, deleteTask, modifyTask}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modifiedTask, setModifiedTask] = useState('');

  const handleSave = () => {
    modifyTask(item.id, modifiedTask);
    setModalVisible(false);
   
  };

  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.task}>{item.task}</Text>
      <View style={styles.icons}>
        <AntDesign
          name="delete"
          size={24}
          color="black"
          onPress={() => deleteTask(item.id)}
        />
        <MaterialCommunityIcons
          name="update"
          size={24}
          color="black"
          onPress={() => {
            setModifiedTask(item.task);
            setModalVisible(true);
          }}
        />
      </View>
      <TaskModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modifiedTask={modifiedTask}
        setModifiedTask={setModifiedTask}
        handleSave={handleSave}
      />

    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
 
})
export default TaskItem;
