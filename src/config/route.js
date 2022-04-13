import React from 'react';
import { View, Text, Button, TouchableOpacity, Linking } from 'react-native';
import { useLinking, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './../components/Login';
import HomeScreen from './../components/Home';

const Stack = createNativeStackNavigator();
Linking.addEventListener('url',(url)=>{ 
    console.log('this is the url: ',url);
});


function DefaultRoutes(){

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );

  React.useEffect(() => {
    // unsubscribe();
    // console.log(helowww)
  }, [unsubscribe]);

  
}

export default DefaultRoutes;