import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Task({ item, deleteTask, modifyTask }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modifiedTask, setModifiedTask] = useState("");


  const handleSave = () => {
    modifyTask(item.id, modifiedTask);
    setModalVisible(false);
   
  };

  

  return (
    <TouchableOpacity style={styles.item}>
      <Text>{item.task}</Text>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setModifiedTask(text)}
              value={modifiedTask}
            />
            <Button
              title="Mentés"
              onPress={handleSave}
            />
            <Button
              title="Bezárás"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
 
});
