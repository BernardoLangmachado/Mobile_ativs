import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';


const DATA = [
    { id: '1', title: '1-Item', foi:true },
    { id: '2', title: '2-Item', foi:false },
    { id: '3', title: '3-Item', foi:false },
];



const ListaTarefa = () => {
    return (
        <View style={styles.container}>
            <Text>Lista</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Text style={item.foi ? styles.feito : styles.nfeito}>{item.title}</Text>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default ListaTarefa;

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    feito:{
        textDecorationLine: 'line-through'
    },

    nfeito:{
        textDecorationLine: 'none',
    },

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
    },
    title: {
        fontSize: 32,
    },
});