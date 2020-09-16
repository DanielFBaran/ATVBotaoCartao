import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/StackBusca';

export default function App(props) {
  return (
    <View style={{flex:1}}>
      <NavigationContainer>
      <Stack></Stack>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
