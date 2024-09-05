import React, {useState, useEffect} from "react" //useEffect pq é: um modo de pular um consolo.log desnecessário e assim deixando mais rapido
import { View, Text, Pressable, StyleSheet } from "react-native"
import {Picker} from '@react-native-picker/picker'


const style = StyleSheet.create({
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

    Picker: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 30,
        width: '30%',
    },
});


export default Singup = () => {
     const[pokemon, seTpokemon] = useState('');

     const [lista_pokemons, seTlistapokemons] = useState([])

    //  const lista_pokemons = [
    //     {nome: 'Pikachu', valeu: 'pikachu'},
    //     {nome: 'Bulbasaur', valeu: 'bulbasaur'},
    //     {nome: 'Charmander', valeu: 'charmander'},
    //     {nome: 'Squirtle', valeu: 'squirtle'}
    //  ];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=400')
        .then(response => response.json())
        .then(dados => seTlistapokemons(dados.results))
    }, [])
    console.log('fora')

    return(
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.titulo}>Selecione um Pokemon  </Text>
                <Picker 
                selectedValue={pokemon}
                style={style.Picker}
                onValueChange={(itemValue) => seTpokemon(itemValue)}
                >
                    <Picker.Item label="Selecione um Pokemon"/> {/* place holder= oq ta escrito dentro da caixa de seleção*/}
                    {lista_pokemons.map((item, index) =>( // caminho até a lista feita la em cima
                        <Picker.Item key={index} label={item.name} valeu={item.url}/>  // chegando o nome= Pikachu e o value/id= pikachu
                    ))}
                </Picker>
        </View>
    );


};
