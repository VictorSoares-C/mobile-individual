import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';
import Styles from './styles';

const Registro = () => {

  const [fontLoaded, setFontLoaded] = useState(false);
  const [tipoCadastro, setTipoCadastro] = useState('')
  const [botaoAtivo, setBotaoAtivo] = useState('');
  

  const loadFont = async () => {
    await Font.loadAsync({
      'whitneybold': require('../../../assets/Fonts/whitneybold.otf'),
      'whitneymedium': require('../../../assets/Fonts/whitneymedium.otf'),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFont();
    setBotaoAtivo('telefone')
    setTipoCadastro('telefone')
  }, []);

  if (!fontLoaded) {
    return null;
  };

  const selecionarCadastro = (tipo) => {
    setTipoCadastro(tipo);
    setBotaoAtivo(tipo);
  };


  return (
    <View style={Styles.container}>
      <View style={Styles.registroContainer}>

        <View style={Styles.tituloContainer}>
          <Text style={Styles.titulo}>Insira seu telefone ou e-mail</Text>
        </View>

        <View style={Styles.toogleContainer}>
          <View style={Styles.botaoBackground}>

            <TouchableOpacity
              style={[Styles.botaoTelefone, tipoCadastro === 'telefone' && Styles.botaoSelecionado, botaoAtivo === 'telefone' ? { backgroundColor: '#41474c' } : { color: '' }]}
              onPress={() => selecionarCadastro('telefone')}
            >
              <Text style={[Styles.textoToogle, botaoAtivo === 'telefone' ? { color: '#fff' } : { color: '#c1c1c1' }]}>
                Telefone
              </Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={[Styles.botaoEmail, tipoCadastro === 'email' && Styles.botaoSelecionado, botaoAtivo === 'email' ? { backgroundColor: '#41474c' } : { color: '' }]}
              onPress={() => selecionarCadastro('email')}
            >
              <Text style={[Styles.textoToogle, botaoAtivo === 'email' ? { color: '#fff' } : { color: '#c1c1c1' }]}>
                E-mail
              </Text>
            </TouchableOpacity>

          </View>
        </View>
        <View style={Styles.textoSelecaoContainer}>
          <Text style={Styles.textoSelecao}>{botaoAtivo === 'telefone' ? 'NUMERO DE TELEFONE' : 'E-MAIL'}</Text>
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={[
              Styles.input,
              { paddingLeft: 15, fontSize: 15, fontFamily: 'whitneymedium' },
            ]}
            placeholder={botaoAtivo === 'telefone' ? 'Telefone' : 'E-mail'}
            placeholderTextColor="#c1c1c1"
            color= '#fff'
          />
        </View>

        <View style={Styles.politicaContainer}>
          <Text style={Styles.politica} >Leia nossa política de privacidade</Text>
        </View>
        <View style={Styles.botaoProximoContainer}>
          <TouchableOpacity style={Styles.botaoProximo}>
            <Text style={Styles.proximo}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Registro
