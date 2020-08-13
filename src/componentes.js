import React from 'react'
import { Text,  View, TouchableOpacity, Button, Image, Alert } from 'react-native'

import {styles} from '../styles/styles.js'

import DataBase from '../db/controle.js'
import { EdtiScreen } from '../screens/editionScreen.js'


export function BtnAnotation (props)
{
    return(
        <TouchableOpacity style={styles.viewBotao} onPress= {() => {Edit(props.title, props.text, props.navigation)}}>
            <View style={styles.viewTitulo}>
                <Text style={styles.txtTitulo}>{props.title}</Text>
            </View>
            <View style={styles.viewConteudo}>
                <Text style={styles.txtConteudo}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function TopBar (props)
{
    return(
        <View style={styles.viewBarrasuperior}>
            <Text style={styles.textTituloApp}>ANOTAPP</Text>
        </View>
    )
}

export function BtnAdd (props)
{
    return(
        <TouchableOpacity onPress = {() => props.navigation.push('Anotation')} style={styles.viewImgPlus}><Image style={styles.imgPlus} source={require('../img/plus.png')} /></TouchableOpacity>
    )
}

export function BtnSalve (props)
{
    return(
        <TouchableOpacity style={styles.viewImgSave} onPress = {() => Salve(props.titulo, props.conteudo, props.navigation)}><Image style={styles.imgSave} source={require('../img/save.png')} /></TouchableOpacity>
    )
}

function Salve(titulo, conteudo, navigation)
{
    const database_name = "anotapp.db";
    //const database_version = "1.0";
    //const database_displayname = "SQLite Database";
    //const database_size = 200000;

    var db

    if(conteudo.length > 0)
    {
        db = DataBase.CreateDB(database_name)
        DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('${titulo}', '${conteudo}');`, db)
        //DataBase.CloseDB(db)
        //navigation.goBack()
        navigation.navigate('Home')
    }
    else
    {
        //mensagem de erro
        alert('Você deve colocar pelo algum conteúdo antes de salvar!')
    }
    //setStateData({title: titulo, data: [conteudo]})
    
}

function Edit(titulo, conteudo, navigation)
{
    navigation.navigate('Edition', {tituloEdit: titulo, conteudoEdit: conteudo})
}