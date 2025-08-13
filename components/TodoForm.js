import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from 'react-native';
import tasksData from '../assets/tasks.json';

const TodoForm = ({ onAddTodo }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState('');
  const [customTask, setCustomTask] = useState('');

  useEffect(() => {
    // Fetch tasks from JSON file
    setTasks(tasksData.tasks);
  }, []);

  const handleAddTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      setSelectedTask(randomTask);
      setCustomTask(''); // Clear custom task when generating random task
    }
  };

  const handleSubmit = () => {
    const taskToAdd = selectedTask || customTask;
    if (taskToAdd.trim()) {
      onAddTodo({
        id: Date.now(),
        text: taskToAdd.trim(),
        completed: false
      });
      setSelectedTask('');
      setCustomTask('');
    } else {
      Alert.alert('Error', 'Please enter a task or generate a random task');
    }
  };

  const handleCustomTaskChange = (text) => {
    setCustomTask(text);
    setSelectedTask(''); // Clear selected task when typing custom task
  };

  const handleSelectedTaskChange = (text) => {
    setSelectedTask(text);
    setCustomTask(''); // Clear custom task when editing selected task
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>
      
      <TouchableOpacity 
        style={styles.generateButton} 
        onPress={handleAddTask}
      >
        <Text style={styles.generateButtonText}>Generate Random Task</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Generated task will appear here..."
        value={selectedTask}
        onChangeText={handleSelectedTaskChange}
        multiline
      />
      
      <Text style={styles.orText}>OR</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your own task..."
        value={customTask}
        onChangeText={handleCustomTaskChange}
        multiline
      />
      
      <TouchableOpacity 
        style={[
          styles.addButton, 
          (!selectedTask.trim() && !customTask.trim()) && styles.addButtonDisabled
        ]} 
        onPress={handleSubmit}
        disabled={!selectedTask.trim() && !customTask.trim()}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  generateButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  generateButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    minHeight: 50,
    textAlignVertical: 'top',
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginVertical: 10,
    fontSize: 14,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  addButtonDisabled: {
    backgroundColor: '#ccc',
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TodoForm;

