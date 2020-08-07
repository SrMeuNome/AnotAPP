import React from 'react'
import { Text,  View, TouchableOpacity } from 'react-native'

import style from '../Styles/styles.js'

export default function BtnAnotation (prop)
{
    return(
        <TouchableOpacity style={style.viewBotao}>
            <View style={style.viewTitulo}>
                <Text style={style.txtTitulo}>{prop.titulo}</Text>
            </View>
            <View style={style.viewConteudo}>
                <Text style={style.txtConteudo}>{prop.text}</Text>
            </View>
        </TouchableOpacity>
    )
}