import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput, Alert } from 'react-native'

import { getStyle } from '../styles/styles.js'

import DataBase from '../db/controle.js'


export function BtnAnotation(props) {
    let [styles, setStyles] = useState(getStyle())
    return (
        <TouchableOpacity onLayout={(e) => {
            setStyles(getStyle())
        }} style={styles.viewBotao} onPress={() => { Edit(props.titleComplete, props.conteudoComplete, props.idConteudo, props.navigation) }}>
            <View style={styles.viewTitulo}>
                <Text numberOfLines={1} style={styles.txtTitulo}>{props.title}</Text>
            </View>
            <View style={styles.viewConteudo}>
                <Text numberOfLines={2} style={styles.txtConteudo}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function TopBar(props) {
    let [styles, setStyles] = useState(getStyle())
    return (
        <View onLayout={(e) => {
            setStyles(getStyle())
        }} style={styles.viewBarrasuperior}>
            <Text style={styles.textTituloApp}>ANOTAPP</Text>
        </View>
    )
}

export function BtnAdd(props) {
    let [styles, setStyles] = useState(getStyle())
    return (
        <TouchableOpacity onLayout={(e) => {
            setStyles(getStyle())
        }} onPress={() => props.navigation.push('Anotation')} style={styles.viewImgRigth}><Image style={styles.imgPlus} source={require('../img/plus.png')} /></TouchableOpacity>
    )
}

export function BtnSalve(props) {
    let [styles, setStyles] = useState(getStyle())
    return (
        <TouchableOpacity onLayout={(e) => {
            setStyles(getStyle())
        }} style={styles.viewImgRigth} onPress={() => Salve(props.titulo, props.conteudo, props.navigation)}><Image style={styles.imgSave} source={require('../img/save.png')} /></TouchableOpacity>
    )
}

export function BtnUpdate(props) {
    let [styles, setStyles] = useState(getStyle())
    let [isEdit, setIsEdit] = useState(false)

    if (isEdit) {
        return (
            <>
                <TouchableOpacity onLayout={(e) => {
                    setStyles(getStyle())
                }} style={styles.viewImgRigth} onPress={() => { Update(props.idUp, props.tituloUp, props.conteudoUp, props.navigation); setIsEdit(false) }}><Image style={styles.imgSave} source={require('../img/save.png')} /></TouchableOpacity>
                <TouchableOpacity onLayout={(e) => {
                    setStyles(getStyle())
                }} style={styles.viewImgLeft} onPress={() => { Delete(props.idUp, props.navigation, (editable) => props.callback(editable)); setIsEdit(false) }}><Image style={styles.imgDelete} source={require('../img/delete.png')} /></TouchableOpacity>
            </>
        )
    }
    else {
        return (
            <>
                <TouchableOpacity onLayout={(e) => {
                    setStyles(getStyle())
                }} style={styles.viewImgRigth} onPress={() => {
                    setIsEdit(true)
                    props.callback(true) //callback(isEdit)
                }}><Image style={styles.imgEdit} source={require('../img/edit.png')} />
                </TouchableOpacity>
            </>
        )
    }

}

export function FilterBar(props) {
    let [styles, setStyles] = useState(getStyle())
    let [isEnable, setIsEnable] = useState(false)
    return (
        <>
            <View onLayout={(e) => {
                setStyles(getStyle())
            }} style={styles.viewFilter}>
                <TouchableOpacity onPress={() => {
                    isEnable ? setIsEnable(false) : setIsEnable(true)
                    props.callbackPress()
                }}>
                    <Image style={styles.imgFilter} source={require('../img/filter.png')} />
                </TouchableOpacity>
                <TextInput editable={isEnable} style={styles.inputFilter} placeholder='Filtrar...' onChangeText={(text) => props.callback(text)} multiline={false} textAlignVertical='center' scrollEnabled={false} maxLength={250}></TextInput>
            </View>
        </>
    )
}

function Salve(titulo, conteudo, navigation) {
    let database_name = "anotapp.db";
    //const database_version = "1.0";
    //const database_displayname = "SQLite Database";
    //const database_size = 200000;

    let db

    if (conteudo.length > 0) {
        db = DataBase.CreateDB(database_name)
        DataBase.InsertDB(`INSERT INTO anotation(title_anotation, text_anotation) VALUES ('${titulo}', '${conteudo}');`, db)
        //DataBase.CloseDB(db)
        //navigation.goBack()
        navigation.navigate('Home')
    }
    else {
        //mensagem de erro
        alert('Você deve colocar pelo algum conteúdo antes de salvar!')
    }
    //setStateData({title: titulo, data: [conteudo]})

}

function Edit(titulo, conteudo, id, navigation) {
    navigation.navigate('Edition', { tituloEdit: titulo, conteudoEdit: conteudo, idEdit: id })
}

function Update(id, titulo, conteudo, navigation) {
    let database_name = "anotapp.db";
    //const database_version = "1.0";
    //const database_displayname = "SQLite Database";
    //const database_size = 200000;

    let db

    if (conteudo.length > 0) {
        db = DataBase.CreateDB(database_name)
        DataBase.InsertDB(`UPDATE anotation SET id_anotation = ${parseInt(id)}, title_anotation = "${titulo}", text_anotation = "${conteudo}" WHERE id_anotation = ${parseInt(id)};`, db)
        //DataBase.CloseDB(db)
        //navigation.goBack()
        navigation.navigate('Home')
    }
    else {
        //mensagem de erro
        alert('Você deve colocar pelo algum conteúdo antes de salvar!')
    }
    //setStateData({title: titulo, data: [conteudo]})

}

function Delete(id, navigation, editable) {
    let database_name = "anotapp.db";
    //const database_version = "1.0";
    //const database_displayname = "SQLite Database";
    //const database_size = 200000;

    let db

    Alert.alert('Atenção:', 'Você tem certeza que deseja deletar esta anotação?',
        [{
            text: 'Cancelar',
            onPress: () => { editable(false) },
            style: "cancel",
        },
        {
            text: 'Confirmar',
            onPress: () => {
                db = DataBase.CreateDB(database_name)
                DataBase.InsertDB(`DELETE FROM anotation WHERE id_anotation = ${id}`, db)
                navigation.navigate('Home')
            },
            style: "default"
        }], { cancelable: false })
}