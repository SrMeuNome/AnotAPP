import React from 'react'
import { Text,  View, SectionList, TouchableOpacity } from 'react-native'

import style from '../Styles/styles.js'

export default function BtnAnotation (prop)
{
    return(
        <TouchableOpacity style={style.viewBotao}>
            <View>
                <Text style={style.txtBotao}>{prop.text}</Text>
            </View>
        </TouchableOpacity>
    )
}