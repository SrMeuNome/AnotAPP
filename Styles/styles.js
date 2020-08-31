import { StyleSheet, Dimensions } from 'react-native'


export const raisedStyles = StyleSheet.create({
    viewMain:
    {
        flex: 1,
        backgroundColor: '#eeeeff'
    },
    viewBarrasuperior:
    {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: '#5555ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCentral:
    {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "nowrap",
        flexDirection: "column"
    },
    viewBotao:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.2,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#5555ff',
        flexDirection: 'column',
        marginTop: (Dimensions.get('window').height * 0.2) * 0.1,
        marginBottom: (Dimensions.get('window').height * 0.2) * 0.1
    },
    txtTitulo:
    {
        fontSize: 30,
        color: 'black'
    },
    txtConteudo:
    {
        fontSize: 20,
        color: 'black'
    },
    textTituloApp:
    {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    viewTitulo:
    {
        width: Dimensions.get('window').width * 0.9,
        height: (Dimensions.get('window').height * 0.2) * 0.4,
        justifyContent: 'center',
        alignItems: "flex-start",
        borderBottomWidth: 3,
        borderBottomColor: '#5555ff',
        paddingTop: (Dimensions.get('window').height * 0.2) * 0.05,
        paddingLeft: (Dimensions.get('window').width * 0.9) * 0.01
    },
    viewConteudo:
    {
        width: Dimensions.get('window').width * 0.9,
        height: (Dimensions.get('window').height * 0.2) * 0.6,
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingLeft: (Dimensions.get('window').width * 0.9) * 0.01,
    },
    viewImgRigth:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'flex-end',
        position: "absolute",
        width: Dimensions.get('window').height * 0.1,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: '#5555ff',
        borderRadius: 50,
        top: Dimensions.get('window').height * 0.79,
        left: Dimensions.get('window').width * 0.8
    },
    viewImgLeft:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'flex-end',
        position: "absolute",
        width: Dimensions.get('window').height * 0.1,
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: '#5555ff',
        borderRadius: 50,
        top: Dimensions.get('window').height * 0.79,
        right: Dimensions.get('window').width * 0.8
    },
    viewFilter:
    {
        flexDirection: "row",
        marginTop: (Dimensions.get('window').height * 0.08) * 0.2,
        backgroundColor: "#ffffff",
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.08,
        borderRadius: 50,
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderWidth: 3,
        paddingLeft: (Dimensions.get('window').width * 0.95) * 0.03,
        position: "absolute",
        //left: (Dimensions.get('window').width / 2) - ((Dimensions.get('window').width * 0.9) / 2),
    },
    viewFilterAnim:
    {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: (Dimensions.get('window').height * 0.95) * 0.01,
        left: Dimensions.get('window').width * 0.9,
    },
    imgFilter:
    {
        width: Dimensions.get('window').height * 0.029,
        height: Dimensions.get('window').height * 0.035,
    },
    imgSave:
    {
        width: Dimensions.get('window').height * 0.055,
        height: Dimensions.get('window').height * 0.055
    },
    imgPlus:
    {
        width: Dimensions.get('window').height * 0.06,
        height: Dimensions.get('window').height * 0.06
    },
    imgDelete:
    {
        width: Dimensions.get('window').height * 0.05,
        height: Dimensions.get('window').height * 0.06
    },
    imgEdit:
    {
        width: Dimensions.get('window').height * 0.06,
        height: Dimensions.get('window').height * 0.06
    },
    inputFilter:
    {
        paddingLeft: (Dimensions.get('window').width * 0.95) * 0.03,
        paddingTop: (Dimensions.get('window').height * 0.055) * 0.1,
        paddingBottom: (Dimensions.get('window').height * 0.055) * 0.1,
        width: Dimensions.get('window').width * 0.75,
        height: Dimensions.get('window').height * 0.055,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'black',
    },
    inputTitulo:
    {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.06,
        backgroundColor: 'white',
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: Dimensions.get('window').height * 0.01,
        paddingLeft: (Dimensions.get('window').width * 0.95) * 0.03,
        paddingBottom: (Dimensions.get('window').height * 0.95) * 0.01,
        fontSize: 20
    },
    inputConteudo:
    {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.65,
        backgroundColor: 'white',
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: Dimensions.get('window').height * 0.01,
        paddingLeft: (Dimensions.get('window').width * 0.95) * 0.03,
        fontSize: 18
    },
    inputConteudoEditing:
    {
        alignSelf: 'center',
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.38,
        backgroundColor: 'white',
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: Dimensions.get('window').height * 0.01,
        paddingLeft: (Dimensions.get('window').width * 0.95) * 0.03,
        fontSize: 18
    },
    list:
    {
        width: Dimensions.get('window').width,
    }
})

export const droopStyles = StyleSheet.create({
    viewMain:
    {
        flex: 1,
        backgroundColor: '#eeeeff'
    },
    viewBarrasuperior:
    {
        width: Dimensions.get('window').height,
        height: Dimensions.get('window').width * 0.06,
        backgroundColor: '#5555ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCentral:
    {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: "nowrap",
        flexDirection: "column"
    },
    viewBotao:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        width: Dimensions.get('window').height * 0.9,
        height: Dimensions.get('window').width * 0.2,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#5555ff',
        flexDirection: 'column',
        marginTop: (Dimensions.get('window').width * 0.2) * 0.1,
        marginBottom: (Dimensions.get('window').width * 0.2) * 0.1
    },
    txtTitulo:
    {
        fontSize: 30,
        color: 'black'
    },
    txtConteudo:
    {
        fontSize: 20,
        color: 'black'
    },
    textTituloApp:
    {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    viewTitulo:
    {
        width: Dimensions.get('window').height * 0.9,
        height: (Dimensions.get('window').width * 0.2) * 0.4,
        justifyContent: 'center',
        alignItems: "flex-start",
        borderBottomWidth: 3,
        borderBottomColor: '#5555ff',
        paddingTop: (Dimensions.get('window').width * 0.2) * 0.05,
        paddingLeft: (Dimensions.get('window').height * 0.9) * 0.01
    },
    viewConteudo:
    {
        width: Dimensions.get('window').height * 0.9,
        height: (Dimensions.get('window').width * 0.2) * 0.6,
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingLeft: (Dimensions.get('window').height * 0.9) * 0.01,
    },
    viewImgRigth:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'flex-end',
        position: "absolute",
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor: '#5555ff',
        borderRadius: 50,
        top: Dimensions.get('window').width * 0.79,
        left: Dimensions.get('window').height * 0.8
    },
    viewImgLeft:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'flex-end',
        position: "absolute",
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor: '#5555ff',
        borderRadius: 50,
        top: Dimensions.get('window').width * 0.79,
        right: Dimensions.get('window').height * 0.8
    },
    viewFilter:
    {
        flexDirection: "row",
        marginTop: (Dimensions.get('window').width * 0.08) * 0.2,
        backgroundColor: "#ffffff",
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        width: Dimensions.get('window').height * 0.9,
        height: Dimensions.get('window').width * 0.08,
        borderRadius: 50,
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderWidth: 3,
        paddingLeft: (Dimensions.get('window').height * 0.95) * 0.03,
        position: "absolute",
        //left: (Dimensions.get('window').width / 2) - ((Dimensions.get('window').width * 0.9) / 2),
    },
    viewFilterAnim:
    {
        width: Dimensions.get('window').height * 0.9,
        height: Dimensions.get('window').width * 0.08,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: (Dimensions.get('window').width * 0.95) * 0.01,
        left: Dimensions.get('window').height * 0.9,
    },
    imgFilter:
    {
        width: Dimensions.get('window').width * 0.029,
        height: Dimensions.get('window').width * 0.035,
    },
    imgSave:
    {
        width: Dimensions.get('window').width * 0.055,
        height: Dimensions.get('window').width * 0.055
    },
    imgPlus:
    {
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06
    },
    imgDelete:
    {
        width: Dimensions.get('window').width * 0.05,
        height: Dimensions.get('window').width * 0.06
    },
    imgEdit:
    {
        width: Dimensions.get('window').width * 0.06,
        height: Dimensions.get('window').width * 0.06
    },
    inputFilter:
    {
        paddingLeft: (Dimensions.get('window').height * 0.95) * 0.03,
        paddingTop: (Dimensions.get('window').width * 0.055) * 0.1,
        paddingBottom: (Dimensions.get('window').height * 0.055) * 0.1,
        width: Dimensions.get('window').height * 0.75,
        height: Dimensions.get('window').width * 0.055,
        fontSize: 18,
        backgroundColor: 'white',
        color: 'black',
    },
    inputTitulo:
    {
        alignSelf: 'center',
        width: Dimensions.get('window').height * 0.95,
        height: Dimensions.get('window').width * 0.06,
        backgroundColor: 'white',
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: Dimensions.get('window').width * 0.01,
        paddingLeft: (Dimensions.get('window').height * 0.95) * 0.03,
        paddingBottom: (Dimensions.get('window').width * 0.95) * 0.01,
        fontSize: 20
    },
    inputConteudo:
    {
        alignSelf: 'center',
        width: Dimensions.get('window').height * 0.95,
        height: Dimensions.get('window').width * 0.65,
        backgroundColor: 'white',
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: Dimensions.get('window').width * 0.01,
        paddingLeft: (Dimensions.get('window').height * 0.95) * 0.03,
        fontSize: 18
    },
    inputConteudoEditing:
    {
        alignSelf: 'center',
        width: Dimensions.get('window').height * 0.95,
        height: Dimensions.get('window').width * 0.38,
        backgroundColor: 'white',
        borderColor: '#5555ff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        marginTop: Dimensions.get('window').width * 0.01,
        paddingLeft: (Dimensions.get('window').height * 0.95) * 0.03,
        fontSize: 18
    },
    list:
    {
        width: Dimensions.get('window').height,
    }
})

export function getStyle() {
    if (Dimensions.get('screen').width > Dimensions.get('screen').height) { return droopStyles }
    else { return raisedStyles }
}