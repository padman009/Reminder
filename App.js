import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ItemScreen from './screens/ItemScreen';

const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Item" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;