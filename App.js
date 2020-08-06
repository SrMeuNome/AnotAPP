/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, StatusBar, Text } from 'react-native';

import styles from './Styles/styles.js'

import BtnAnotation from './src/componentes.js'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.viewMain}>
        <View style={styles.viewBarrasuperior}>
          <Text style={styles.textTitulo}>ANOTAPP</Text>
          </View>
          <View style={styles.viewCentral}>
            <BtnAnotation text= "Teste" />
          </View>
      </SafeAreaView>
    </>
  );
};

export default App;
