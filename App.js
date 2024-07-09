import {Button, Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header1 from './src/components/Header1';
import Products from './src/components/Products';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import ProductWrapper from './src/components/ProductWrapper';
import UserList from './src/components/UserList';


const Stack = createNativeStackNavigator();
const App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen   name='Home' component={ProductWrapper} />
        <Stack.Screen  name='UserList' component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

