import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import{store} from "./store";
import HomeScreen from './screens/HomeScreen';
import HomeScreen2 from './screens/HomeScreen2';
import HomeScreen3 from './screens/HomeScreen3';
import HomeScreen4 from './screens/HomeScreen4';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginPage from './screens/LoginPage';
import MapScreen from './screens/MapScreen';
import MapScreen2 from './screens/MapScreen2';
import MapScreen3 from './screens/MapScreen3';

import BookScreen from './screens/BookScreen';
import BookScreen2 from './screens/BookScreen2';
import BookScreen3 from './screens/BookScreen3';
import BookScreen4 from './screens/BookScreen4';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
       <NavigationContainer>
         <SafeAreaProvider>
         <Stack.Navigator>
         <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown:false,}}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false,}}/>
          <Stack.Screen name="HomeScreen2" component={HomeScreen2} options={{headerShown:false,}}/>
          <Stack.Screen name="HomeScreen3" component={HomeScreen3} options={{headerShown:false,}}/>
          <Stack.Screen name="HomeScreen4" component={HomeScreen4} options={{headerShown:false,}}/>
          <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false,}}/>
          <Stack.Screen name="MapScreen2" component={MapScreen2} options={{headerShown:false,}}/>
          <Stack.Screen name="MapScreen3" component={MapScreen3} options={{headerShown:false,}}/>
          <Stack.Screen name="BookScreen" component={BookScreen} options={{headerShown:false,}}/>
          <Stack.Screen name="BookScreen2" component={BookScreen2} options={{headerShown:false,}}/>
          <Stack.Screen name="BookScreen3" component={BookScreen3} options={{headerShown:false,}}/>
          <Stack.Screen name="BookScreen4" component={BookScreen4} options={{headerShown:false,}}/>
        </Stack.Navigator>
         </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
