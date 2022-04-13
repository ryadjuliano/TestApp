import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Alert} from 'react-native';
import AppRoute from './src/config/route';



const App = () => {


  return (
    // <AppStateProvider>
    <SafeAreaView style={{flex: 1}}>
    <AppRoute/>
    </SafeAreaView>
    // </AppStateProvider>
  );
}
export default App;