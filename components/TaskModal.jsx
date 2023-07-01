import React from 'react';
import { View, Modal, TextInput, Button } from 'react-native';

const TaskModal = ({ modalVisible, setModalVisible, modifiedTask, setModifiedTask, handleSave }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View >
        <View >
          <TextInput
           
            onChangeText={(text) => setModifiedTask(text)}
            value={modifiedTask}
          />
          <Button title="Save" onPress={handleSave} />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </View>
    </Modal>
  );
};



export default TaskModal;
