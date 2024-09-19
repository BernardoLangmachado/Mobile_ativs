import React, {useState} from "react"
import { View, Text, TextInput, Pressable, StyleSheet, Image, Button, ScrollView, header } from "react-native"
import Cabesalho from "../../components/Header/header";
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
        marginBottom: 20,
        borderRadius: 20,
      },

      foto2: {
        width: 98,
        height: 98,
        borderRadius: 50,
      },

      text: {
        fontSize: 17,
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
      },

      text2: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 20,
        resizeMode: 'cover'
      },

      buttonsContainer: {
        flexDirection: 'colon',
        justifyContent: 'space-between',
        width: '70%',
      },
});


export default Singup = () => {


    return(
        <ScrollView  style={styles.scrollView}>
        <View style={styles.container}>

            

            <View style={styles.quadrado}>
             <Cabesalho />

                    <View style={styles.foto}>
                        <Image style={styles.foto2}  source={require('../../assets/images/Be.L.jpeg')}/> 
                    </View>
                        
                    <Text style={styles.text}>
                        Sobre mim
                    </Text>

                    <Text style={styles.text2}>
                        eu to tentando muito fazer isso dar certo mas n ta funcionando que nem tudo na minha vida
                    </Text>

                    <View style={styles.buttonsContainer}>
                      <Link href={'/sobre_min/animes'} asChild>
                        <Button title="Animes Favoritos" />
                      </Link>

                      <Link href={'/sobre_min/musicas'} asChild>
                        <Button title="Musica" />
                      </Link>
                    </View>

            </View>

        </View>
        </ScrollView>
    ); 
};

