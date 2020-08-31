import 'react-native-gesture-handler';

import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, StatusBar, Animated, Dimensions, useWindowDimensions, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native'

import { styles } from '../styles/styles.js'

import { BtnAnotation, BtnAdd, FilterBar } from '../src/componentes.js'

import DataBase from '../db/controle.js'

const database_name = "anotapp.db";
//const database_version = "1.0";
//const database_displayname = "SQLite Database";
//const database_size = 200000;

//Tamanho maximo texto do titulo
const maxLimitTitulo = 19

//Tamanho maximo texto do conteúdo
const maxLimitConteudo = 30

//FlatList temos as seguintes propriedades:
//item: retorna o objeto somente com o nome 'data' de uma posição do Array
//index: retorna o index do Array
//section: retorna o objeto completo em uma posição do Array

var db = DataBase.CreateDB(database_name)

DataBase.CreateTables(db)

export const Home = (props) => {
  let [data, setDATA] = useState([])
  let [filter, setFilter] = useState('')

  //propriedade se está focando na tela ou não
  const isFocused = useIsFocused()

  //let [styles, setStyles] = useState(styles)
  //Executando select

  useEffect(() => {
    if (filter === '') {
      db.transaction((tx) => {
        tx.executeSql(`SELECT * FROM anotation;`, [], (tx, results) => {
          let len = results.rows.length
          let row = []
          for (let i = 0; i < len; i++) {
            row.push(results.rows.item(i))
          }
          setDATA(row)
          console.log('Query Complete!')
        },
          (err) => {
            console.log("error: ", err);
            //console.log("Error: "+ (err.message || err));
            return false;
          })
      })
    }
    else {
      db.transaction((tx) => {
        //SQL_Latin1_General_CP1_CI_AS = NÃO SENSITIVEL
        //SQL_Latin1_General_CP1_CS_AS = SENSITIVEL
        tx.executeSql(`SELECT * FROM anotation WHERE title_anotation COLLATE SQL_Latin1_General_CP1_CI_AS LIKE '%${filter}%' OR text_anotation COLLATE SQL_Latin1_General_CP1_CI_AS LIKE '%${filter}%';`, [], (tx, results) => {
          let len = results.rows.length
          let row = []
          for (let i = 0; i < len; i++) {
            row.push(results.rows.item(i))
          }
          setDATA(row)
          console.log('Query Complete!')
        },
          (err) => {
            console.log("error: ", err);
            //console.log("Error: "+ (err.message || err));
            return false;
          })
      })
    }
  }, [isFocused, filter])

  //Controle de animação
  const position = useRef(new Animated.ValueXY()).current
  const positionList = useRef(new Animated.ValueXY()).current
  const sizeList = useRef(new Animated.ValueXY({ x: 1, y: 1 })).current
  let [isSlid, setIsSlid] = useState(false)

  //O scale é o unico que a comparação é de 0 a 1

  //Função para fazer o slide do filtro
  const slid = () => {
    if (!isSlid) {
      //slide filter
      Animated.spring(position, { toValue: { x: (Dimensions.get('window').width * (Dimensions.get('window').width > 550 ? -0.71 : -0.85)), y: 0 }, useNativeDriver: true }).start()

      //move list
      Animated.spring(positionList, { toValue: { x: 0, y: (Dimensions.get('window').height * (Dimensions.get('window').width > 550 ? 0.1 : 0.05)) }, useNativeDriver: true }).start()

      //scale list
      Animated.spring(sizeList, { toValue: { x: 1, y: 0.9 }, useNativeDriver: true }).start()
    }
    else {
      //slide filter
      Animated.spring(position, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start()

      //move list
      Animated.spring(positionList, { toValue: { x: 0, y: 0 }, useNativeDriver: true }).start()

      //scale list
      Animated.spring(sizeList, { toValue: { x: 1, y: 1 }, useNativeDriver: true }).start()
    }
  }


  //retorno para montar a tela
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.viewMain]}>
        <Animated.View style={[styles.viewCentral, { transform: [{ translateX: positionList.x }, { translateY: positionList.y }, { scaleX: sizeList.x }, { scaleY: sizeList.y }] }]}>
          <FlatList
            style={{ width: useWindowDimensions().width }}
            data={data}
            keyExtractor={(item, index) => item['id_anotation'].toString()}
            renderItem={({ item }) => <BtnAnotation {...props}
              title={item['title_anotation'].length > maxLimitTitulo ? (item['title_anotation']).substring(0, maxLimitTitulo - 3) + '...' : item['title_anotation']}
              text={item['text_anotation'].length > maxLimitConteudo ? (item['text_anotation']).substring(0, maxLimitConteudo - 3) + '...' : item['text_anotation']}
              titleComplete={item['title_anotation']}
              conteudoComplete={item['text_anotation']}
              idConteudo={item['id_anotation']} />}
          />
        </Animated.View>

        <Animated.View style={[styles.viewFilterAnim, {
          top: (useWindowDimensions().height * 0.95) * 0.01,
          left: useWindowDimensions().width * (useWindowDimensions().width > 500 ? 0.94 : 0.9),
          transform: [{ translateX: position.x }, { translateY: position.y }]
        }]}>
          <FilterBar callback={(text) => setFilter(text)} callbackPress={() => {
            isSlid ? setIsSlid(false) : setIsSlid(true)
            slid()
          }} />
        </Animated.View>
        <BtnAdd {...props} />
      </SafeAreaView>
    </>
  )
}