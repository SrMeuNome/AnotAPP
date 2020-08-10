import 'react-native-gesture-handler';

import React, { useState } from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {styles} from '../styles/styles.js'

import {BtnAnotation, BtnAdd} from '../src/componentes.js'

import DataBase from '../db/controle.js'

const database_name = "anotapp.db";
//const database_version = "1.0";
//const database_displayname = "SQLite Database";
//const database_size = 200000;

//FlatList temos as seguintes propriedades:
//item: retorna o objeto somente com o nome 'data' de uma posição do Array
//index: retorna o index do Array
//section: retorna o objeto completo em uma posição do Array

var db = DataBase.CreateDB(database_name)

DataBase.CreateTables(db)
/*DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 1', 'Teste Conteudo 1');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 2', 'Teste Conteudo 2');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 3', 'Teste Conteudo 3');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 4', 'Teste Conteudo 4');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 5', 'Teste Conteudo 5');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 6', 'Teste Conteudo 6');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 7', 'Teste Conteudo 7');`, db)
DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('Teste Titulo 8', 'Teste Conteudo 8');`, db)*/

export const Home = (props) =>
{
  let [data, setDATA] = useState([])

  //Executando select
  db.transaction( (tx) => { tx.executeSql(`SELECT * FROM anotation;`, [], (tx, results) =>
  {
        let len = results.rows.length
        let row = []
        console.log('Inicio')
        for (let i = 0; i < len; i++)
        {
            row.push(results.rows.item(i))
        }
        console.log('Primeiro for: ' + row[0])

        setDATA(row)
        console.log('Resoltado final: ' + data[0]['id_anotation'])
    },
    (err) => {
        console.log("error: ",err);
        //console.log("Error: "+ (err.message || err));
        return false;
    })})

    DataBase.CloseDB(db)

  return(
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.viewMain}> 
        <View style={styles.viewCentral}>
          <FlatList
            data = {data}
            keyExtractor = {(item, index) => item['id_anotation'] + index}
            renderItem = {({item}) => <BtnAnotation title = {item['title_anotation']}  text = {item['text_anotation']} />}
          />
        </View>
        <BtnAdd {...props}/>
      </SafeAreaView>
    </>
  )
}