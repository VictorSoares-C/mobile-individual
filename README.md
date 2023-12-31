# Clone de Interface do Discord

## Descrição do Projeto
Esse projeto faz parte do trabalho individual da matédia de Desenvolvimento de Aplicativo Mobile do curso de Residência em TIC do Serratec.
O trabalho consiste na clonagem da interface de algum aplicativo, replicando pelo menos duas telas. Meu aplicativo escolhido foi o Discord.
Além disso, o trabalho incluia o desafio de salvar a informação do input no dispositivo ao clicar no botão. O desafio foi realizado na tela "Chat"

## Prints do Projeto

As imagens do lado esquerdo são as originais e a do lado direito as clonadas.

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Tela%20Principal%20Original.jpg" alt="Tela Principal Original" width="300" style="margin-right: 10px;"/>
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Clone%20Tela%20Principal.jpg" alt="Clone da Tela Principal Criado" width="300" style="margin-left: 10px;"/>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Tela%20Registre-se%20Original%20(Op%C3%A7%C3%A3o%20Telefone).jpg" alt="Tela Registre-se (Opção Telefone) Original" width="300" style="margin-right: 10px;"/>
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Clone%20Tela%20Registre-se%20(Op%C3%A7%C3%A3o%20Telefone).jpg" alt="Clone Registre-se (Opção Telefone) Criado" width="300" style="margin-left: 10px;"/>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Tela%20Registre-se%20Original%20(Op%C3%A7%C3%A3o%20E-mail).jpg" alt="Tela Registre-se (Opção E-mail) Original" width="300" style="margin-right: 10px;"/>
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Clone%20Tela%20Registre-se%20(Op%C3%A7%C3%A3o%20E-mail).jpg" alt="Clone Registre-se (Opção E-mail) Criado" width="300" style="margin-left: 10px;"/>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Tela%20Entrar%20Original.jpg" alt="Tela Entrar Original" width="300" style="margin-right: 10px;"/>
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Clone%20Tela%20Entrar.jpg" alt="Clone Tela Entrar Criado" width="300" style="margin-left: 10px;"/>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Tela%20Chat%20Original.jpg" alt="Tela Chat Original" width="300" style="margin-right: 10px;"/>
    <img src="https://github.com/VictorSoares-C/mobile-individual/blob/main/imagens_read-me/Clone%20Tela%20Chat.jpg" alt="Clone Tela Chat Criado" width="300" style="margin-left: 10px;"/>
</div>


## Tecnologias Utilizadas
- React Native
- React Navigation

## Configuração de Rotas
O projeto utiliza o React Navigation com três rotas configuradas.

- Rota 1: Tela inicial (clonagem da página inicial do Discord).
- Rota 2: Tela de registro.
- Rota 3: Tela de login
- Rota 4: Tela de chat

## Detalhes das Rotas
- As rotas possuem um componente de Input vinculado a um State e um Botão TouchableOpacity para ações adicionais.
- Na tela de registro (clicando no botão "Registre-se" na página inicial), existe um toogle onde o usuário pode escolher fazer o cadastro usando telefone ou e-mail.
- A tela de login (clicando no botão "Entrar" na página inicial), aparece as opções de login do usuário
- Para motivos de estudo, não foi configurado nenhum método ou código para autorizar login. Somente as telas foram clonadas.
- Para acessar a tela de chat, você deve entrar na tela de login (clicando no botão "Entrar" na página inicial) e clicar no botão entrar na página de login.
- Não é necessário inserir login e senha para acessar a tela de chat, porém, os campos TextInput da página login são funcionais.
- A tela de chat possui um histórico padrão de imagem para estilização. O texto é salvo usando AsyncStorage no React Native.
