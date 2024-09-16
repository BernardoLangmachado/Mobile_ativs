import React from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Image, Modal } from 'react-native';

const App = () => {
    const logo_banco = require('../banco/imgs/santanderlogo.png');

    const [number, onChangeText] = React.useState('');
    const [saldo , setSaldo] = React.useState(7320.92);
 
    const Sacar = () => {
       var guard = saldo - number; 
       var taxa = guard * 0.025;    
       setSaldo(guard - taxa)
       console.log(taxa)

    }

    const Deposit = () => {
        numero = parseFloat(number)
        var guad1 = saldo + numero
        var add = number * 0.01
        setSaldo(guad1 + add)
        console.log (add)
    }

    const onPressFunction = () => {
        console.log("Pressable foi pressionado");
    };

    return (
        <View style={styles.container}>

            <Image
                style={styles.logo}
                source={logo_banco} 
            />

            <Text>Seu Valor Atual na Conta</Text>

            <Text>R${saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</Text>

            <Text>Digite um valor abaixo e escolha uma das operações bancárias:</Text>
            <TextInput
                onChangeText={onChangeText}
                value={number}
                placeholder="Insira o número aqui"
                keyboardType="numeric"
                style={styles.input}
            />

            <Modal animationType="fade" transparent={true}
            visible={modalVisible}> </Modal>

            <Pressable onPress={Sacar} style={styles.pressable}>
                <Text style={styles.pressableText}>Sacar</Text>
            </Pressable>

            <Pressable onPress={Deposit} style={styles.pressable}>
                <Text style={styles.pressableText}>Depositar</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '30%',
    },
    pressable: {
        backgroundColor: '#FF0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    pressableText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

});

export default App;
