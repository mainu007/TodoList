import {TextInput, Button, StyleSheet, View, Modal} from 'react-native';
import React, {useState} from 'react';

export default function TaskInput(props) {
  const {onAddGoal, visible, setInputIsVisible} = props;
  const [enteredTask, setEnteredTask] = useState('');

  const cancelHandler = () => {
    setInputIsVisible(false);
  };

  const addGoalHandler = () => {
    if (enteredTask) {
      onAddGoal(enteredTask);
      setEnteredTask('');
      setInputIsVisible(false);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entered your task!"
          value={enteredTask}
          onChangeText={setEnteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandler} color="red" />
          </View>
          <View style={styles.button}>
            <Button title="Add Task" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
  },
  inputContainer: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 8,
  },
});
