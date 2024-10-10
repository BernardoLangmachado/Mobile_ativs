import React, {useState} from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"




const styles = StyleSheet.create({
   
      texto1:{
        fontSize: 24,
        margin: 8,
        marginBottom: 22,
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    quadrado: {
        width: 320,
        height: 73,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b51c00',
        marginBottom: 50,
        borderRadius: 16,
        marginTop: -53,
      },

});




const Headerzin = () => {
    return(
        <View style={styles.container}>       
             <View style={styles.quadrado}>
        <Text style={styles.texto1}>Meu app</Text>
            </View>
                
        </View>
    )
}

export default Headerzin;