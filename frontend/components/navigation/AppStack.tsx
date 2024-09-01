import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/homeScreen';

const Stack = createNativeStackNavigator();

export const AppStack:React.FC = () => {
  return (
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
  );
};