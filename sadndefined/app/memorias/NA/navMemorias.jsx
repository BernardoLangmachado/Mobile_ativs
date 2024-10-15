import React, { useState } from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"




const styles = StyleSheet.create({

    container: {
        backgroundColor: '#720e00',
        width: 300,
        height: 45,
        alignItems: 'center',
        borderRadius: 20,
    },
        texto1: {
            fontSize: 24,
            color: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            
        
        },


    });




const Navmemorias = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>Memórias</Text>
        </View>
    )
}

export default Navmemorias;