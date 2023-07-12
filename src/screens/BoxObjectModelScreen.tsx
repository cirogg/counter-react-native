import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1, //QUe se estire todo lo que pueda con respecto al padre. SAFEVIEW en App.tsx
  },
  title: {
    paddingVertical: 100,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    //backgroundColor: 'red',
    fontSize: 20,
    borderWidth: 1,
  },
});
