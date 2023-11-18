import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#23272a',
    },
    registroContainer: {
      flex: 0.5,
      margin: 10,
    },
    tituloContainer: {
      alignItems: 'center',
    },
    titulo: {
      fontFamily: 'whitneybold',
      fontSize: 30,
      color: '#fff',
    },
    toogleContainer: {
      marginVertical: 20,
      alignItems: 'center',
    },
    botaoBackground: {
      width: '95%',
      height: 30,
      backgroundColor: '#191919',
      borderRadius: 5,
      flexDirection: 'row',
      marginVertical: 15,
    },
    botaoTelefone: {
      width: '50%',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
  
    botaoEmail: {
      width: '50%',
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
    },
  
    botaoSelecionado: {
      borderRadius: 5,
    },
    textoToogle: {
      fontSize: 15,
      fontFamily: 'whitneymedium',
    },
    textoSelecaoContainer: {
      marginLeft: 10,
    },
    textoSelecao: {
      color: '#c1c1c1',
      fontFamily: 'whitneybold',
  
    },
    inputContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    input: {
      width: '95%',
      height: 45,
      backgroundColor: '#191919',
      borderRadius: 5,
      marginVertical: 10,
    },
    politicaContainer: {
      marginLeft: 10,
      marginVertical: 5,
    },
    politica: {
      color: '#56aaff',
      textAlign: 'left',
      fontFamily: 'whitneymedium',
      fontSize: 15,
    },
    botaoProximoContainer: {
      alignItems: 'center',
      marginVertical: 10,
    },
    botaoProximo: {
      width: '95%',
      height: 35,
      backgroundColor: '#5865f2',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    proximo: {
      fontFamily: 'whitneybold',
      fontSize: 15,
      color: '#fff',
    },
  })

export default Styles;