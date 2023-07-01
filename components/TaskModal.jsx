import React from 'react';
import { View, Modal, StyleSheet, TextInput, Button,Text } from 'react-native';

const TaskModal = ({ modalVisible, setModalVisible, modifiedTask, setModifiedTask, handleSave }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Edit </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setModifiedTask(text)}
        value={modifiedTask}
      />
      <View style={styles.buttonContainer}>
        <Button  title="Save" onPress={handleSave} />
        <Button   title="Close" onPress={() => setModalVisible(false)} />
      </View>
    </View>
  </View>
</Modal>

  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width:300,
    height:200,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    justifyContent:'center',  
  },
  modalTitle: {
    textAlign:'center',
    padding:20,
    fontWeight:'bold',
    fontSize:20,

  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
 
});


export default TaskModal;
