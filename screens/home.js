import 'react-native-gesture-handler';

import React from 'react'
import { SafeAreaView, View, StatusBar, SectionList } from 'react-native'

import {styles} from '../styles/styles.js'

import {BtnAnotation, BtnAdd} from '../src/componentes.js'

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

//SectionList temos as seguintes propriedades:
//item: retorna o objeto somente com o nome 'data' de uma posição do Array
//index: retorna o index do Array
//section: retorna o objeto completo em uma posição do Array

//Partes principais de uma SectionList
//sections : Array com os dados
//keyExtractor: o id de cada item
//renderItem: os itens que vão renderizar
//{...} serve para herdar propriedades do pai

export function Home(props)
{
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.viewMain}> 
                <View style={styles.viewCentral}>
                <SectionList
                    sections = {DATA}
                    keyExtractor = {(item, index) => item + index}
                    renderItem = {({section}) => <BtnAnotation titulo = {section['title']}  text = {section['data']} />}
                />
                </View>
                <BtnAdd {...props} />
            </SafeAreaView>
        </>
    )
}