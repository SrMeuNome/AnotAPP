/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View, StatusBar, Text, SectionList } from 'react-native';

import styles from './Styles/styles.js'

import BtnAnotation from './src/componentes.js'

//SectionList temos as seguintes propriedades:
//item: retorna o objeto somente com o nome 'data' de uma posição do Array
//index: retorna o index do Array
//section: retorna o objeto completo em uma posição do Array

//Partes principais de uma SectionList
//sections : Array com os dados
//keyExtractor: o id de cada item
//renderItem: os itens que vão renderizar

const DATA = [
  {
    title: 'Titulo 1',
    data: ['Conteúdo 1']
  },
  {
    title: 'Titulo 2',
    data: ['Conteúdo 2']
  },
  {
    title: 'Titulo 3',
    data: ['Conteúdo 3']
  },
  {
    title: 'Titulo 4',
    data: ['Conteúdo 4']
  },
  {
    title: 'Titulo 5',
    data: ['Conteúdo 5']
  },
  {
    title: 'Titulo 6',
    data: ['Conteúdo 6']
  },
  {
    title: 'Titulo 7',
    data: ['Conteúdo 7']
  }
]

//Preenchendo a lista com o for
for (let i = 8; i < 11; i++)
{
  DATA.push({title: 'Titulo ' + i, data: ['Conteúdo ' + i]})
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.viewMain}>
        <View style={styles.viewBarrasuperior}>
          <Text style={styles.textTituloApp}>ANOTAPP</Text>
          </View>
          <View style={styles.viewCentral}>
            <SectionList
              sections = {DATA}
              keyExtractor = {(item, index) => item + index}
              renderItem = {({section}) => <BtnAnotation titulo = {section['title']}  text = {section['data']} />}
            />
          </View>
      </SafeAreaView>
    </>
  );
};

export default App;
