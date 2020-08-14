import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, TextInput, Keyboard } from 'react-native'

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

    let [isEdit, setIsEdit] = useState(false)

    let [isKeybord, setIsKeybord] = useState(false)

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _show)
        Keyboard.addListener('keyboardDidHide', _hiden)

        return () => {
            Keyboard.removeListener('keyboardDidShow', _show)
            Keyboard.removeListener('keyboardDidHide', _hiden)
        }
    },[])

    const _show = () =>
    {
        setIsKeybord(true)
    }

    const _hiden = () =>
    {
        setIsKeybord(false)
    }

  
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.viewMain}>
                <TextInput editable = {isEdit} value = {titulo} onChangeText = {(text) => setTitulo(text)} multiline = {false} style = {styles.inputTitulo} placeholder = 'Título' textAlignVertical = 'center'></TextInput>
                <TextInput editable = {isEdit} value = {conteudo} onChangeText = {(text) => setConteudo(text)} multiline = {true} style = {isKeybord? styles.inputConteudoEditing : styles.inputConteudo} placeholder = 'Conteúdo' textAlignVertical = 'top'></TextInput>
                <BtnUpdate {...props} callback = {(isEdit) => setIsEdit(isEdit)} tituloUp = {titulo} conteudoUp = {conteudo} idUp = {id} />
            </SafeAreaView>
        </>
    )
}