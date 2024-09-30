import React, { useRef } from 'react';
import { View, StyleSheet, Animated, ScrollView } from 'react-native';
import Header from './Components/Header';
import TabNavigator from './Components/TabNagivator';
import { NavigationContainer } from '@react-navigation/native';
import Handler from './Components/Handler';
import ScrollContextProvider from './Context/Context';
const App = () => {
  return (
    <ScrollContextProvider>
      <NavigationContainer>
        <Handler />
      </NavigationContainer>
    </ScrollContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 300, // Height of the header
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  tabNavigator: {
    minHeight: 0, // Initial minimum height
    zIndex: 1, // Ensure it stays above other content
  },
  content: {
    height: 1000, // Height for additional content
    backgroundColor: '#eaeaea',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
