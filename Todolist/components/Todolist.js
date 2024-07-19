import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";
import { forceTouchHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/ForceTouchGestureHandler";

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Learn React Native", completed: true },
        { id: 2, text: "Learn Redux", completed: false },
    ]);
    const [text, setText] = useState('');

    function addTask() {
        const newTask = { id: Date.now(), text, completed: false };
        setTasks([...tasks, newTask]);
        setText('');
    }

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    function toggleCompleted(id) {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    }

    return (
        <View style={styles.container}>
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted} />
            ))}
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="New Task"
                placeholderTextColor="#888"
                style={styles.input}
            />
            <Button title="Add Task" onPress={addTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        backgroundColor: '#000',
        color: '#fff', // Set text color to black
    },
}); 