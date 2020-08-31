import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { SafeAreaView, StatusBar, TextInput, Keyboard } from 'react-native'

import { BtnSalve } from '../src/componentes.js'
import { getStyle } from '../styles/styles.js'


export const AnotationScreen = (props) => {
    let [styles, setStyles] = useState(getStyle())
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
            <SafeAreaView onLayout={(e) => {
                setStyles(getStyle())
            }} style={styles.viewMain}>
                <TextInput onChangeText={(text) => setTitulo(text)} multiline={false} style={styles.inputTitulo} placeholder='Título' textAlignVertical='center'></TextInput>
                <TextInput onChangeText={(text) => setConteudo(text)} multiline={true} style={isKeybord ? styles.inputConteudoEditing : styles.inputConteudo} placeholder='Conteúdo' textAlignVertical='top'></TextInput>
                <BtnSalve {...props} titulo={titulo} conteudo={conteudo} />
            </SafeAreaView>
        </>
    )
}