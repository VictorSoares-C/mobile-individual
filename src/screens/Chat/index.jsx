import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';
import Styles from './styles';

const Chat = () => {

    const [fontLoaded, setFontLoaded] = useState(false);

    const [conversa, setConversa] = useState([
        { id: '1', text: 'Olá! Como vai?' },
        { id: '2', text: 'Estou bem, obrigado!' },
    ]);

    const [mensagem, setMensagem] = useState('');
    const flatListRef = useRef(null);

    useEffect(() => {
        carregarMensagensSalvas();
    }, []);

    const carregarMensagensSalvas = async () => {
        try {
            const mensagensSalvas = await AsyncStorage.getItem('mensagens');
            if (mensagensSalvas !== null) {
                setConversa(JSON.parse(mensagensSalvas));
            }
        } catch (error) {
            console.error('Erro ao carregar mensagens salvas:', error);
        }
    };

    const salvarMensagens = async () => {
        try {
            await AsyncStorage.setItem('mensagens', JSON.stringify(conversa));
        } catch (error) {
            console.error('Erro ao salvar mensagens:', error);
        }
    };

    const enviarMensagem = () => {
        if (mensagem.trim() === '') return;

        const novaMensagem = {
            id: String(conversa.length + 1),
            text: mensagem,
        };

        setConversa([...conversa, novaMensagem]);
        setMensagem('');

        salvarMensagens();
    };

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    }, [conversa]);

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
        <View style={Styles.container}>
            <FlatList
                ref={flatListRef}
                data={conversa}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Styles.messagemContainer}>
                        <Text style={Styles.messagemText}>{item.text}</Text>
                    </View>
                )}
                contentContainerStyle={Styles.flatlistContainer}
                onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
            />

            <View style={Styles.inputContainer}>
                <TextInput
                    style={Styles.input}
                    value={mensagem}
                    onChangeText={(texto) => setMensagem(texto)}
                    placeholder='Conversar em #geral'
                    placeholderTextColor='#c1c1c1'
                />
                <TouchableOpacity style={Styles.botao} onPress={enviarMensagem}>
                    <Ionicons name="send" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Chat

