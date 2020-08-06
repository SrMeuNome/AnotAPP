import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    viewMain: {
        flex: 1
    },
    viewBarrasuperior: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.06,
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewCentral: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    viewBotao: {
        width: Dimensions.get('window').width*0.9,
        height: Dimensions.get('window').height*0.1,
        backgroundColor: '#0000ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBotao: {
        fontSize: 50,
        color: 'white'
    },
    textTitulo:
    {
        fontSize: 20,
        color: 'white'
    }
})

export default styles