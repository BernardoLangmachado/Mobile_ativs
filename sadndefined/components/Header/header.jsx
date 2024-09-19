import React, {useState} from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"




const styles = StyleSheet.create({
    quadrado: {
        width: 322,
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b51c00',
        marginBottom: 50,
        borderRadius: 16,
        marginTop: -53,
      },
      texto1:{
        fontSize: 24,
        margin: 8,
        marginBottom: 22,
        color: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

});




const Cabesalho = () => {




    return(
        <View style={styles.container}
>            <View style={styles.quadrado}>
        <Text style={styles.texto1}>Meu app</Text>
            </View>
                
        </View>
    )
}

export default Cabesalho;