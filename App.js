import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import {enableScreens} from 'react-native-screens'

import MealsNavigator from './navigation/MealsNavigator';

enableScreens()

export default function App() {
  let[fontsLoaded, error] = useFonts({
    'bold': require('./assets/fonts/OSans-Bold.ttf'),
    'huballi': require('./assets/fonts/Hubballi-Regular.ttf')
  })

  if(!fontsLoaded){
    return (
      <AppLoading />
    )
  }
  return (
    <View style={styles.container}>
      <MealsNavigator />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
