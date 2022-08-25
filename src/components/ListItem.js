import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

export default function ListItem(props) {
  const {text, onRemove, id} = props;
  return (
    <View style={styles.listItem}>
      <Pressable
        onPress={onRemove.bind(this, id)}
        style={({pressed}) =>
          pressed && {
            backgroundColor: '#4700b3',
            borderRadius: 6,
          }
        }>
        <Text style={styles.listText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 3,
    backgroundColor: '#5e0acc',
    borderRadius: 6,
  },
  listText: {
    padding: 8,
    color: 'white',
  },
});
