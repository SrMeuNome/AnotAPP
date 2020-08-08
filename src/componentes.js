import React from 'react'
import { Text,  View, TouchableOpacity, Button, Image } from 'react-native'

import {styles} from '../styles/styles.js'


export function BtnAnotation (props)
{
    return(
        <TouchableOpacity style={styles.viewBotao}>
            <View style={styles.viewTitulo}>
                <Text style={styles.txtTitulo}>{props.titulo}</Text>
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
        <TouchableOpacity onPress = {() => props.navigation.navigate('Anotation')} style={styles.viewImgPlus}><Image style={styles.imgPlus} source={require('../img/plus.png')} /></TouchableOpacity>
    )
}

export function BtnSalve (props)
{
    return(
        <TouchableOpacity style={styles.viewImgSave}><Image style={styles.imgSave} source={require('../img/save.png')} /></TouchableOpacity>
    )
}