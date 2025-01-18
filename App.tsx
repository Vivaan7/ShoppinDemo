import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import TextSearchScreen from './src/screens/TextSearchScreen';
import ImageSearchScreen from './src/screens/ImageSearchScreen';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  TextSearch: undefined;
  ImageSearch: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="TextSearch" component={TextSearchScreen} options={{ headerShown: false, title: 'Text Search' }} />
        <Stack.Screen name="ImageSearch" component={ImageSearchScreen} options={{headerShown: false,  title: 'Image Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
