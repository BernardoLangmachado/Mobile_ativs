import React, {useState, useEffect} from "react" //useEffect pq é: um modo de pular um consolo.log desnecessário e assim deixando mais rapido
import { View, Text, Pressable, StyleSheet, Button, Image } from "react-native"
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
    imagem: {
        width: '300px',
        height: '300px'
    }
});


export default Singup = () => {
     const[pokemon, seTpokemon] = useState('eevee');
     const[tipo, seTtipo] = useState('normal')
     const [lista_pokemons, seTlistapokemons] = useState([])
     const [lista_tipo, seTlistatipo] = useState ([])
     const [sprites, seTsprites] = useState ('')

    //  const lista_pokemons = [
    //     {nome: 'Pikachu', valeu: 'pikachu'},
    //     {nome: 'Bulbasaur', valeu: 'bulbasaur'},
    //     {nome: 'Charmander', valeu: 'charmander'},
    //     {nome: 'Squirtle', valeu: 'squirtle'}
    //  ];

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')//pegando o os primeiros 17 tipos de pokemon
        .then (response => response.json())
        .then (data => seTlistatipo(data.results)) 
    }, [])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${tipo}`)//pegando os 400 primeiro pokemons
        .then(response => response.json())
        .then(dados => seTlistapokemons(dados.pokemon))/*le apenas uma vez, manda fazer e só volta a 
        aparecer quando recebe a resposta emquanto le e executa as outras funções do site*/
    }, [tipo])
    // console.log('fora')//é lido e renderizado toda vez que reseta a pagina

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)//pegando o os primeiros 17 tipos de pokemon
        .then (response => response.json())
        .then (data => seTsprites(data.sprites)) 
    }, [pokemon])

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
                        <Picker.Item key={index} label={item.pokemon.name} valeu={item.pokemon.url}/>  // chegando o nome= Pikachu e o value/id= pikachu
                    ))}
                </Picker>

                <Picker 
                selectedValue={tipo}
                style={style.Picker}
                onValueChange={(itemValue) => seTtipo(itemValue)}
                >
                    <Picker.Item label="Selecione um tipo"/> 
                    {lista_tipo.map((item, index) =>( 
                        <Picker.Item key={index} label={item.name} valeu={item.name}/>  
                    ))}
                </Picker>

        

            <Image
                style={style.imagem}
                source={{
                    uri: sprites.front_default
                }}
            />
        </View>
    );
};
