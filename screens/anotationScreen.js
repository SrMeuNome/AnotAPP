import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, TextInput, Keyboard, useWindowDimensions } from 'react-native'

import { BtnSalve } from '../src/componentes.js'
import { styles } from '../styles/styles.js'


export const AnotationScreen = (props) => {
    let [titulo, setTitulo] = useState('')
    let [conteudo, setConteudo] = useState('')
    let [isKeybord, setIsKeybord] = useState(false)

    useEffect(() => {
        Keyboard.addListener('keyboardDidShow', _show)
        Keyboard.addListener('keyboardDidHide', _hiden)

        return () => {
            Keyboard.removeListener('keyboardDidShow', _show)
            Keyboard.removeListener('keyboardDidHide', _hiden)
        }
    }, [])

    const _show = () => {
        setIsKeybord(true)
    }

    const _hiden = () => {
        setIsKeybord(false)
    }

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.viewMain}>
                <TextInput onChangeText={(text) => setTitulo(text)} multiline={false} style={styles.inputTitulo} placeholder='Título' textAlignVertical='center'></TextInput>
                <TextInput onChangeText={(text) => setConteudo(text)} multiline={true} style={isKeybord ? [styles.inputConteudoEditing, { height: useWindowDimensions().height * 0.38, }] : [styles.inputConteudo, { height: useWindowDimensions().height * 0.65, }]} placeholder='Conteúdo' textAlignVertical='top'></TextInput>
                <BtnSalve {...props} titulo={titulo} conteudo={conteudo} />
            </SafeAreaView>
        </>
    )
}