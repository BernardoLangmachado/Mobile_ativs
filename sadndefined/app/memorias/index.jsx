import React, {useState} from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable} from "react-native"
import Navmemorias from "./componentes/navMemorias";
import { Link } from "expo-router";


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },

      quadrado: {
        width: 320,
        height: 460,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
      },

      buttonsContainer: {
        flexDirection: 'colon',
        justifyContent: 'space-between',
        width: '70%',
      },

      botaoaddmemory: {
        backgroundColor: 'red',
       
      },
  
      textobotaomemory: {
        
          
      },
     
});


export default memorias = () => {


    return(
     
        <View style={styles.container}>
            <Navmemorias/>

                <View style={styles.quadrado}>

                  <Pressable style={styles.botaoaddmemory}> 
                    <Text style={styles.textobotaomemory}>Add Memória</Text>    
                  </Pressable> 

                </View>
        </View>

        
     
    ); 
};

