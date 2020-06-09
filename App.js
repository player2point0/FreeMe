import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import DistractionsScreen from './screens/DistractionsScreen.js';
import ProgressScreen from './screens/ProgressScreen.js';
import FeelingsScreen from './screens/FeelingsScreen.js';
import PostWorkScreen from './screens/PostWorkScreen.js';

import useCachedResources from './hooks/useCachedResources';

const Stack = createStackNavigator();

//todo add horizontal animations for transitions

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="DistractionsScreen"
              screenOptions={{
                headerShown: true,
              }}

          >
            <Stack.Screen
                name="DistractionsScreen"
                component={DistractionsScreen}
            />
            <Stack.Screen
                name="ProgressScreen"
                component={ProgressScreen}
            />
            <Stack.Screen
                name="FeelingsScreen"
                component={FeelingsScreen}
            />
            <Stack.Screen
                name="PostWorkScreen"
                component={PostWorkScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
