import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    viewMain:
    {
        flex: 1
    },
    viewBarrasuperior:
    {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.06,
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCentral:
    {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    viewBotao:
    {
        justifyContent: 'center',
        alignItems: "center",
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').height*0.2,
        backgroundColor: '#eeeeee',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#0000ff',
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
        color: 'white'
    },
    viewTitulo:
    {
        width: Dimensions.get('window').width*0.9,
        height: (Dimensions.get('window').height*0.2) * 0.4,
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        borderBottomWidth: 3,
        borderBottomColor: '#0000ff',
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
    }
})

export default styles