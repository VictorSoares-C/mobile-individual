import { View, Text, Image, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Styles from './styles';

const Main = () => {
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
                <TouchableOpacity style={Styles.botaoRegistrar} activeOpacity={0.7}>
                    <Text style={Styles.textoBotao}>Registre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.botaoEntrar} activeOpacity={0.7}>
                    <Text style={Styles.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default Main

