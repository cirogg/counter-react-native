/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeworkScreen1} from './src/screens/homework/HomeworkScreen1';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeworkScreen1 />
    </SafeAreaView>
  );
};
