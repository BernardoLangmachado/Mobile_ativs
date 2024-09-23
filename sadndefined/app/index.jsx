import React, {useState} from "react"
import { View, Text, Pressable, StyleSheet, FlatList } from "react-native"
import { Link } from 'expo-router';


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
        marginBottom: 22
    },
     lista:{
       backgroundColor: '#FFA500',
       padding: 20,
       marginVertical: 8,
       marginHorizontal: 16,
     },
})

const DATA = [
    {
      id: '1',
      title: 'Banco',
      link:'/banco'
    },
    {
      id: '2',
      title: 'Calculadora',
      link:'/calculadora'
    },
    {
      id: '3',
      title: 'Calculadora 2',
      link:'/calculadora 2'
    },
    {
      id: '4',
      title: 'Lista-Tarefa',
      link:'/lista-tarefa'
      
    },
    {
      id: '5',
      title: 'Telapicker',
      link:'/telapicker'
    },
    {
      id: '6',
      title: 'Telaregistro',
      link:'/telaregistro'
    },
    {
      id: '7',
      title: 'Telalogin',
      link:'/tela_login'
    },
    {
      id: '8',
      title: 'Sobremim',
      link:'/sobre_min'
    },
    {
      id: '9',
      title: 'ifome',
      link:'/carrinho'
    },
  

  ];

  const Item = ({title}: ItemProps) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );


export default Singup = () => {


    return(
       <View style={StyleSheet.container}>
        <Text style={StyleSheet.titulo}>Selecione Uma Pagina  </Text>
          <FlatList style={StyleSheet.lista} data={DATA}
        renderItem={({item}) =>
         <Link href={item.link}>
            <Pressable>
              <Text>{item.title}</Text> 
            </Pressable>
          </Link> }
        keyExtractor={item => item.id}/>
       </View>
    )
}
