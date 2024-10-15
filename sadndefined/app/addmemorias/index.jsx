import React, {useState} from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable, TextInput} from "react-native"
import Navmemorias from "../memorias/NA/navMemorias";


const styles = StyleSheet.create({

    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },

      quadrado: {
        width: 380,
        height: 660,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        justifyContent: 'center'
      },

      quadrado2: {
        width: 320,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d1d1d1',
        borderRadius: 20,
        justifyContent: 'center'
      },

      buttonsContainer: {
        flexDirection: 'colon',
        justifyContent: 'space-between',
        width: '70%',
      },

      botaoaddmemory: {
        backgroundColor: '#720e00',
        borderRadius: 20,
        height: 54,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center'
       
      },
  
      textobotaomemory: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center'
          
      },

      input: {
        height: 40,
        width: 223,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },

      input2: {
        height: 40,
        width: 223,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
     
});


export default memorias = () => {


    return(
     
        <View style={styles.container}>
            <Navmemorias/>

                <View style={styles.quadrado}>

                    <View style={styles.quadrado2}>

                        <TextInput  style={styles.input} value={Text} placeholder="local" keyboardType="text"></TextInput>

                        <TextInput  style={styles.input2} value={Text} placeholder="Data" keyboardType="text"></TextInput>

                        <TextInput  style={styles.input2} value={Text} placeholder="Descrição" keyboardType="text"></TextInput>

                         <Pressable style={styles.botaoaddmemory}> 
                                <TextInput></TextInput>    
                        </Pressable> 
                    </View>

                </View>
        </View>

        
     
    ); 
};

