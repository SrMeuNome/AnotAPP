import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { SafeAreaView, StatusBar, TextInput, Text } from 'react-native'

import {BtnSalve} from '../src/componentes.js'
import {styles} from '../styles/styles.js'


export class AnotationScreen extends Component
{
    state = {
        titulo: '',
        conteudo: ''
    }

    render()
    {
        return(
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView style={styles.viewMain}>
                    <TextInput onChangeText = {(text) => this.setState({titulo: text})} multiline = {false} style = {styles.inputTitulo} placeholder = 'Título' textAlignVertical = 'center'></TextInput>
                    <TextInput onChangeText = {(text) => this.setState({conteudo: text})} multiline = {true} style = {styles.inputConteudo} placeholder = 'Conteúdo' textAlignVertical = 'top'></TextInput>
                    <BtnSalve {...this.props} {...this.state} titulo = {this.state.titulo} conteudo = {this.state.conteudo} />
                </SafeAreaView>
            </>
        )
    }
}