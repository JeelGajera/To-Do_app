import { useState } from 'react';
import { StyleSheet, TextInput, Button, View, Modal } from 'react-native';

function TaskInput(props) {

    const [enterTask, setEnterTask] = useState('');

    function taskInputHandle(enterText) {
        setEnterTask(enterText);
    };

    function addTaskHandler() {
        props.onAddTask(enterTask);
        setEnterTask('');
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputText}
                    placeholder='Enter your task!'
                    onChangeText={taskInputHandle}
                    value={enterTask}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={addTaskHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            color='red'
                            onPress={props.onCancel}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default TaskInput;

styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    inputText: {
        fontSize: 16,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 20,
        width: '80%',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        margin: 10,
    },
});