import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, StatusBar, TextInput } from 'react-native'

import {BtnSalve} from '../src/componentes.js'
import {styles} from '../styles/styles.js'


export function AnotationScreen(props)
{
    return(
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.viewMain}>
                <TextInput multiline = {false} style = {styles.inputTitulo} placeholder = 'Título' textAlignVertical = 'top'></TextInput>
                <TextInput multiline = {true} style = {styles.inputConteudo} placeholder = 'Conteúdo' textAlignVertical = 'top'></TextInput>
                <BtnSalve />
            </SafeAreaView>
        </>
    )
}