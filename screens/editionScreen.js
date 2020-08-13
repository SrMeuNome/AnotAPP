import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { SafeAreaView, StatusBar, TextInput, Text } from 'react-native'

import {BtnUpdate} from '../src/componentes.js'
import {styles} from '../styles/styles.js'


//route.params é o metodo de parametors passados pelo navigate 

export const EdtiScreen = (props) =>
{
    const { tituloEdit } = props.route.params
    const { conteudoEdit } = props.route.params
    const { idEdit } = props.route.params

    let [titulo, setTitulo] = useState(tituloEdit)
    let [conteudo, setConteudo] = useState(conteudoEdit)
    let [id, setId] = useState(idEdit)

  
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.viewMain}>
                <TextInput value = {titulo} onChangeText = {(text) => setTitulo(text)} multiline = {false} style = {styles.inputTitulo} placeholder = 'Título' textAlignVertical = 'center'></TextInput>
                <TextInput value = {conteudo} onChangeText = {(text) => setConteudo(text)} multiline = {true} style = {styles.inputConteudo} placeholder = 'Conteúdo' textAlignVertical = 'top'></TextInput>
                <BtnUpdate {...props} tituloUp = {titulo} conteudoUp = {conteudo} idUp = {id} />
            </SafeAreaView>
        </>
    )
}