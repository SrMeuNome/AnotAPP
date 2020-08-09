import 'react-native-gesture-handler';

import React, { Component } from 'react'
import { SafeAreaView, View, StatusBar, SectionList, Text } from 'react-native'

import {styles} from '../styles/styles.js'

import {BtnAnotation, BtnAdd} from '../src/componentes.js'

import DataBase from '../db/controle.js'

const database_name = "anotapp.db";
//const database_version = "1.0";
//const database_displayname = "SQLite Database";
//const database_size = 200000;

let db = DataBase.CreateDB(database_name)

DataBase.CreateTables(db)

DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo', 'Teste Conteudo');`, db)

var rowsDB = DataBase.GetQuery(`SELECT JSON_OBJECT('title', a.title_anotation, 'text', a.text_anotation) AS data FROM anotation a;`, db)

const DATA = []

for (let i = 0; i < rowsDB.length; i++)
{
  let jssonData = JSON.parse(rowsDB[0])
  console.log(jsonData.title)
  DATA.push({title: jssonData.title, data: [jssonData.text]})
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

export class Home extends Component
{

  state = {
    Value: DATA
  }
  render()
  {
    return(
      <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView style={styles.viewMain}> 
            <View style={styles.viewCentral}>
              <SectionList
                  sections = {this.state.Value}
                  keyExtractor = {(item, index) => item + index}
                  renderItem = {({section}) => <BtnAnotation titulo = {section['title']}  text = {section['data']} />}
              />
              <Text>Teste: {rowsDB[0]}</Text>
            </View>
            <BtnAdd {...this.props} {...this.state} />
          </SafeAreaView>
      </>
    )
  }
}