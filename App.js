import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import Router from './src/Router';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor='#f00'/>
      <Router></Router>
    </>
  );
}
