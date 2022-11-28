import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import SplashScreen from './src/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App