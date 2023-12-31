import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList, SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import {ColorProvider} from "./context/ColorContext";


export default function App() {
  const [task, setTask] = useState([])

  const addTask = (text) => {
    if (!text) {
      Alert.alert('Please add Task')
    } else {
      setTask(prevTasks => {
        return [{ task: text, id: Math.floor(Math.random() * 10000) + 1 }, ...prevTasks]
      })
    }
  }

  const deleteTask = id => {
    setTask(prevTasks => {
      return prevTasks.filter(task => task.id !== id)
    })

  }

  const modifyTask = (id, modifiedTask) => {
    const updatedTasks = task.map(task => {
      if (task.id === id) {
        return { ...task, task: modifiedTask };
      }
      return task;
    });

    setTask(updatedTasks);
  };


  return (
    <ColorProvider>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask addTask={addTask} />         
          <View style={styles.list} >
            <FlatList  data={task} horizontal  showsHorizontalScrollIndicator={false} renderItem={({ item }) => (
              <Task item={item}
                deleteTask={deleteTask}
                modifyTask={modifyTask}               
             />
            )}
            />           
          </View>
        </View>
      </SafeAreaView >
    </TouchableWithoutFeedback>
    </ColorProvider>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {
    padding: 30,
    flex: 1,    
  },
  list: {  
    marginTop: 70,
  },

})