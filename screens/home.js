import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StatusBar, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {styles} from '../styles/styles.js'

import {BtnAnotation, BtnAdd} from '../src/componentes.js'

import DataBase from '../db/controle.js'

const database_name = "anotapp.db";
//const database_version = "1.0";
//const database_displayname = "SQLite Database";
//const database_size = 200000;

//Tamanho maximo texto do titulo
const maxLimitTitulo = 21

//Tamanho maximo texto do conteúdo
const maxLimitConteudo = 35

//FlatList temos as seguintes propriedades:
//item: retorna o objeto somente com o nome 'data' de uma posição do Array
//index: retorna o index do Array
//section: retorna o objeto completo em uma posição do Array

var db = DataBase.CreateDB(database_name)

DataBase.CreateTables(db)

export const Home = (props) =>
{
  let [data, setDATA] = useState([])
  //Executando select
  
  useEffect( () => 
  {
    db.transaction( (tx) => { tx.executeSql(`SELECT * FROM anotation;`, [], (tx, results) =>
    {
          let len = results.rows.length
          let row = []
          for (let i = 0; i < len; i++)
          {
              row.push(results.rows.item(i))
          }
          setDATA(row)
          console.log('Query Complete!')
      },
      (err) => {
          console.log("error: ",err);
          //console.log("Error: "+ (err.message || err));
          return false;
      })
    })
  })
      

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.viewMain}> 
        <View style={styles.viewCentral}>
          <FlatList
            data = {data}
            keyExtractor = {(item, index) => item['id_anotation'].toString()}
            renderItem = {({item}) => <BtnAnotation {...props}
                                      title = {item['title_anotation'].length > maxLimitTitulo ? (item['title_anotation']).substring(0,maxLimitTitulo-3) + '...' : item['title_anotation']}
                                      text = {item['text_anotation'].length > maxLimitConteudo ? (item['text_anotation']).substring(0,maxLimitConteudo-3) + '...' : item['text_anotation']}
                                      titleComplete = {item['title_anotation']}
                                      conteudoComplete = {item['text_anotation']}
                                      idConteudo = {item['id_anotation']} />}
          />  
        </View>
        <BtnAdd {...props}/>
      </SafeAreaView>
    </>
  )
}