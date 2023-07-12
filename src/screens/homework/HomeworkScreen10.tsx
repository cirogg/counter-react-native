import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const HomeworkScreen10 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <View style={styles.cajaAzul}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cajaMorada: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    top: 50,
    backgroundColor: '#F0A23B',
  },
  cajaAzul: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#2BC4D9',
  },
});
