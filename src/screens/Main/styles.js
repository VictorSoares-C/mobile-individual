import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    containter: {
        flex: 1,
        backgroundColor: '#23272a',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        width: '50%',
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImagem: {
        flex: 1,
        width: '100%'
    },
    imagemContainer: {
        flex: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: '100%',
    },
    mensagem: {
        flex: 1,
        width: '80%',
        justifyContent: 'center',
    },
    mensagemTitulo: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'whitneybold',
        fontSize: 30,
    },
    mensagem2: {
        flex: 1,
        width: '70%',
        marginBottom: -25,
    },
    mensagemTexto: {
        color: '#c1c1c1',
        textAlign: 'center',
        fontFamily: 'whitneymedium',
        fontSize: 15,
    },
    botaoContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        gap: 10,
    },
    botaoRegistrar:{
        width: '90%',
        height: 35,
        backgroundColor: '#5865f2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoBotao:{
        fontFamily: 'whitneybold',
        color: '#fff',
    },
    botaoEntrar:{
        width: '90%',
        height: 35,
        backgroundColor: '#4b4b4b',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Styles;