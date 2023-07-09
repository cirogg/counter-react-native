import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: String;
  onPress: () => void;
  position?: 'br' | 'bl';
}

export const Fab = (props: Props) => {
  const ios = () => {
    return (
      <View>
        <TouchableOpacity
          // style={
          //   props.position === 'bl'
          //     ? styles.fabLocationLeft
          //     : styles.fabLocationRight
          // }
          style={[
            styles.fabLocation,
            props.position === 'bl' ? styles.left : styles.right,
          ]}
          activeOpacity={0.75}
          onPress={() => props.onPress()}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {props.title} </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          props.position === 'bl' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          // style={
          //   props.position === 'bl'
          //     ? styles.fabLocationLeft
          //     : styles.fabLocationRight
          // }
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
          onPress={() => props.onPress()}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {props.title} </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fabLocationRight: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationLeft: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
});
