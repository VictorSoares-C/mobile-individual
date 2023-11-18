import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23272a',
    },
    loginContainer: {
        flex: 0.5,
        margin: 10,
    },
    boasVindas: {
        alignItems: 'center',
        marginBottom: 30,
    },
    tituloContainer:{
        marginTop: 10,
        marginBottom: 10,
    },
    titulo: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'whitneybold',
        textAlign: 'center',
    },
    texto: {
        color: '#c1c1c1',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'whitneymedium'
    },
    infoContainer: {
        marginBottom: 10,
    },
    info: {
        color: '#c1c1c1',
        textAlign: 'left',
        fontFamily: 'whitneymedium',
        fontSize: 13,
    },
    input: {
        height: 40,
        borderRadius: 5,
        backgroundColor: '#191919',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    recuperarContainer: {
        marginBottom: 10,
    },
    recuperar: {
        color: '#56aaff',
        textAlign: 'left',
        fontFamily: 'whitneymedium',
        fontSize: 13,
    },
    botaoContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    botao: {
        width: '100%',
        height: 35,
        backgroundColor: '#5865f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    entrar: {
        fontFamily: 'whitneybold',
        fontSize: 15,
        color: '#fff',
    },
})

export default Styles;