import React, {useState} from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable} from "react-native"
import Navmemorias from "./NA/navMemorias"
import { Link } from "expo-router";


const styles = StyleSheet.create({

    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      },

      quadrado: {
        width: 320,
        height: 460,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
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
     
});


export default memorias = () => {


    return(
     
        <View style={styles.container}>
            <Navmemorias/>

                <View style={styles.quadrado}>

                  <Pressable style={styles.botaoaddmemory}> 
                    <Link href={'/memorias/addmemorias'} asChild>
                      <Text style={styles.textobotaomemory}>Add Memória</Text>
                    </Link>    
                  </Pressable> 

                </View>
        </View>

        
     
    ); 
};

