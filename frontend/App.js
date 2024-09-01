import { registerRootComponent } from 'expo';
import { Text, View } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './components/navigation/AppStack'


function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

registerRootComponent(App);