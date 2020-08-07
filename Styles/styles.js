import { StyleSheet, Dimensions } from 'react-native'


export const styles = StyleSheet.create({
    viewMain:
    {
        flex: 1,
        backgroundColor: '#eeeeff'
    },
    viewBarrasuperior:
    {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.06,
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
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').height*0.2,
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#5555ff',
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10
    },
    txtTitulo:
    {
        fontSize: 35,
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
        width: Dimensions.get('window').width*0.9,
        height: (Dimensions.get('window').height*0.2) * 0.4,
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        borderBottomWidth: 3,
        borderBottomColor: '#5555ff',
        paddingTop: 30,
        paddingLeft: 10
    },
    viewConteudo:
    {
        width: Dimensions.get('window').width*0.9,
        height: (Dimensions.get('window').height*0.2) * 0.6,
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingLeft: 10,
    },
    viewImgPlus:
    {
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'flex-end',
        position: "absolute",
        width: Dimensions.get('window').height*0.1,
        height: Dimensions.get('window').height*0.1,
        backgroundColor: '#5555ff',
        borderRadius: 50,
        top: Dimensions.get('window').height * 0.857,
        left: Dimensions.get('window').width * 0.82
    },
    imgPlus:
    {
        width: Dimensions.get('window').height*0.06,
        height: Dimensions.get('window').height*0.06
    }
})