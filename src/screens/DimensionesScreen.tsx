import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

//const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada}></View>
      <View style={styles.cajaNaranja}></View>
      <Text style={styles.tittle}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //QUe se estire todo lo que pueda con respecto al padre. SAFEVIEW en App.tsx
  },
  cajaMorada: {
    width: '50%',
    height: '30%',
    backgroundColor: '#5856D6',
  },
  cajaNaranja: {
    flex: 1,
    backgroundColor: '#F0A23B',
  },
  tittle: {
    fontSize: 30,
    textAlign: 'center',
  },
});
