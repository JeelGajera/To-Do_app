import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [task, setTask] = useState([]);

  function startModalHandle() {
    setModalIsVisible(true);
  };

  function endModalhandle() {
    setModalIsVisible(false);
  }

  function addTaskHandle(enterTask) {
    setTask((currentTask) => [
      ...currentTask, 
      { id: Math.random().toString(), value: enterTask }
    ]);
    endModalhandle();
  };

  function deleteTaskHandle(id) {
    setTask((currentTask) => {
      return currentTask.filter((task) => task.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Button 
        title="Enter New Task" 
        color="rgb(15,22, 37)"
        onPress={startModalHandle} 
      />
      {modalIsVisible && <TaskInput visible={modalIsVisible} onAddTask={addTaskHandle} onCancel={endModalhandle}/>}
      <View style={styles.listContainer}>
        <FlatList
          data={task}
          renderItem={itemData => (
            <TaskItem 
              text={itemData.item.value}
              id={itemData.item.id}
              onDeleteTask={deleteTaskHandle}
            />
          )}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    borderTopColor: '#ccc',
    borderTopWidth: 1,
    width: '80%',
  },
});