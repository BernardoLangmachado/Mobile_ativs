
import React, {useState} from "react"
import { View, Text, TextInput, Pressable, StyleSheet, SafeAreaView } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 100,
    },

    titulo:{
        fontSize: 24,
        margin: 8,
        marginBottom: 22,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 30,
        width: '30%',
    },

    pressableText: {    
        backgroundColor: '#FFA500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },

});

export default Singup = () => {

    const[nome, setNome] = useState('')

    const[email, setEmail] = useState('')

    const[senha, setSenha] = useState('')

    const registartuser = async function() {
        if (!nome || !email || !senha){
            console.log('os parametros nome, email e senha não foram forneceidos')
        }
        const resposta = await fetch('https://taskhub-s37f.onrender.com/auth/signup',{
            method:'POST',
            headers: {
                Accept: 'appication/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({nome:nome, email:email, senha:senha})
        })
        if(!resposta){
            console.log('erro')
        } else if (resposta.status == 200){
            console.log('user cirado')
        } else {
            console.log('deu um erro ai')
        }   
    }
    
    console.log(nome)

    console.log(email)

    console.log(senha)

    return(
    <SafeAreaView>
        <View style={styles.container}>

            <Text style={styles.titulo}>Faça seu Registro</Text>

            <TextInput   
                style={styles.input}
                onChangeText={(Text) => setNome(Text)}
                value={nome}
                placeholder="Nome"
               
            />

            <TextInput
                style={styles.input}
                onChangeText={(Text) => setEmail(Text)}
                value={email}
                placeholder="E-mail"
                
            />

            <TextInput
                style={styles.input}
                onChangeText={(Text) => setSenha(Text)}
                value={senha}
                secureTextEntry={true}
                placeholder="Senha"
                
            />

            <Pressable onPress={registartuser} >
            <Text style={styles.pressableText}>Cadastrar</Text>
            </Pressable>

        </View>
    </SafeAreaView>

    );
};

