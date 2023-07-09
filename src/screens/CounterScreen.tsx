/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="-1" onPress={() => setCounter(counter - 1)} position="bl" />
      <Fab title="+1" onPress={() => setCounter(counter + 1)} position="br" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    top: -15, // Por defecto POSITION esta en relative
  },
});
