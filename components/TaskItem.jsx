import { StyleSheet, Text, View, Pressable } from 'react-native';

const TaskItem = (props) => {
    return (
        <Pressable onPress={props.onDeleteTask.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text style={styles.task}>{props.text}</Text>
            </View>
        </Pressable>
    );
};

export default TaskItem;

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        backgroundColor: 'rgb(15, 22, 37)',
        borderRadius: 10,
    },
    task: {
        color: '#f8b34b',
        fontSize: 14,
        padding: 5,
        textAlign: 'center',
    },
});