import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const Main = () => {

    const navigation = useNavigation();
    const [fontLoaded, setFontLoaded] = useState(false);

    //método para ir pra página de registro
    const entrarRegistro = () => {
        navigation.navigate('Registro');
    };

    //Método para ir para a página de login
    const entrarLogin = () => {
        navigation.navigate('Login');
    };
    
    //Método para fazer o uso da fonte customizável, É necessário um async para dar tempo de baixar as fontes
    const loadFont = async () => {
        await Font.loadAsync({
            'whitneybold': require('../../../assets/Fonts/whitneybold.otf'),
            'whitneymedium': require('../../../assets/Fonts/whitneymedium.otf'),
        });
        setFontLoaded(true);
    };

    useEffect(() => {
        loadFont();
    }, []);

    if (!fontLoaded) {
        return null;
    };

    return (
        <View style={Styles.containter}>
            <View style={Styles.logo}>
                <Image
                    source={require('../../../assets/Logo/discord-logo-white.png')}
                    style={Styles.logoImagem}
                    resizeMode="contain"
                />
            </View>
            <View style={Styles.imagemContainer}>
                <Image
                    source={require('../../../assets/Figuras/Imagem_discord.png')}
                    style={Styles.imagem}
                    resizeMode='contain'
                />
            </View>
            <View style={Styles.mensagem}>
                <Text style={Styles.mensagemTitulo}>Bem-vindo (ou vinda) ao Discord</Text>
            </View>
            <View style={Styles.mensagem2}>
                <Text style={Styles.mensagemTexto}>Junte-se a mais de 100 milhões de pessoas que usam o Discord para conversar com seus amigos e comunidades</Text>
            </View>
            <View style={Styles.botaoContainer}>
                <TouchableOpacity style={Styles.botaoRegistrar} activeOpacity={0.7} onPress={entrarRegistro}>
                    <Text style={Styles.textoBotao}>Registre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.botaoEntrar} activeOpacity={0.7} onPress={entrarLogin}>
                    <Text style={Styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Main

