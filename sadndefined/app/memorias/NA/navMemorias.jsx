import React, {useState} from "react"
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"




const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },


    header3: {
        width: 322,
        height: 63,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b51c00',
        marginBottom: 170,
        borderRadius: 16,
        marginTop: 53,
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




const Navmemorias = () => {
    
    return(
        <View style={styles.container}>    
                <Text style={styles.texto1}>Memórias</Text>
        </View>
    )
}

export default Navmemorias;