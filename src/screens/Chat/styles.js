import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23272a',
        padding: 10,
        justifyContent: 'flex-end',
    },
    flatlistContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    messagemContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 12,
        paddingVertical: 8,
        maxWidth: '80%',
    },
    messagemText: {
        fontSize: 16,
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 15,
    },
    input: {
        flex: 1,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#191919',
        paddingHorizontal: 10,
        color: '#fff',
        marginRight: 10,
    },
    botao: {
        width: 40,
        height: 40,
        backgroundColor: '#5865f2',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
   
    },
    textoBotao: {
        fontFamily: 'whitneybold',
        fontSize: 15,
        color: '#fff',
    },
});

export default Styles;