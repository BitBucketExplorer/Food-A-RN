import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {colors} from './src/global/styles';
import SignIn from './src/screens/authScreens/SignIn';
const App = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusbar} />
      <SignIn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
