import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack'

import { Home } from './screens/home.js'
import { AnotationScreen } from './screens/anotationScreen.js'
import { EdtiScreen } from './screens/editionScreen.js'
import { TopBar } from './src/componentes.js'

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ header: props => <TopBar {...props} />, animationEnabled: true, animationTypeForReplace: "push" }} />
          <Stack.Screen name="Anotation" component={AnotationScreen} options={{ header: props => <TopBar {...props} />, animationEnabled: true, animationTypeForReplace: "push" }} />
          <Stack.Screen name="Edition" component={EdtiScreen} options={{ header: props => <TopBar {...props} />, animationEnabled: true, animationTypeForReplace: "push" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
