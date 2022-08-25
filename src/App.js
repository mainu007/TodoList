import {View, StyleSheet, FlatList, Button} from 'react-native';
import React, {useState} from 'react';
import ListItem from './components/ListItem';
import TaskInput from './components/TaskInput';

export default function App() {
  // state
  const [tasks, setTasks] = useState([]);
  const [inputIsVisible, setInputIsVisible] = useState(false);

  // add goal handler
  const addGoalHandler = enteredTask => {
    setTasks([...tasks, {id: Math.random().toString(), text: enteredTask}]);
  };

  // remove task
  const removeTask = id => {
    setTasks(currentTasks => currentTasks.filter(value => value.id !== id));
  };

  const inputVisibleHandler = () => {
    setInputIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Button title="Add your Task" onPress={inputVisibleHandler} />
      <TaskInput
        onAddGoal={addGoalHandler}
        visible={inputIsVisible}
        setInputIsVisible={setInputIsVisible}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          renderItem={({item}) => (
            <ListItem text={item.text} onRemove={removeTask} id={item.id} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  listContainer: {
    paddingTop: 24,
    flex: 5,
  },
});
