import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CheckBox from 'react-native-check-box';
import PropTypes from 'prop-types';

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
    return (
        <View style={styles.todoItem}>
            <CheckBox
                isChecked={task.completed}
                onClick={() => toggleCompleted(task.id)}
            />
            <Text style={[styles.todoItemText, task.completed && styles.completed]}>
                {task.text}
            </Text>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteTask(task.id)}
            >
                <Text style={{ color: '#fff' }}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

TodoItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        color: '#fff',
    },
    todoItemText: {
        flex: 1,
        marginRight: 8,
        color: '#fff',
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    deleteButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});

export default TodoItem;