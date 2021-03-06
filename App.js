import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';

import {Provider} from 'react-redux';
import store from './redux/Store';

import StartStudyScreen from './screens/StartStudyScreen.js';
import ProgressScreen from './screens/ProgressScreen.js';
import FeelingsScreen from './screens/FeelingsScreen.js';
import PostWorkScreen from './screens/PostWorkScreen.js';
import RecommendationScreen from './screens/RecommendationScreen.js';
import AuthScreen from "./screens/AuthScreen";
import WorkFocusScreen from './screens/WorkFocusScreen';

import useCachedResources from './hooks/useCachedResources';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const Stack = createStackNavigator();

//todo add horizontal animations for transitions

export default App

function App() {
    const isLoadingComplete = useCachedResources();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="dark-content"/>}
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName="AuthScreen"
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            <Stack.Screen
                                name="AuthScreen"
                                component={AuthScreen}
                            />
                            <Stack.Screen
                                name="StartStudyScreen"
                                component={StartStudyScreen}
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
                            <Stack.Screen
                                name="RecommendationScreen"
                                component={RecommendationScreen}
                            />
                            <Stack.Screen
                                name="WorkFocusScreen"
                                component={WorkFocusScreen}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
