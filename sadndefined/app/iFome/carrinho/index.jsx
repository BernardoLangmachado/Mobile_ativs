import React, {useState} from "react"
import { View, Text, Pressable, StyleSheet, ScrollView, } from "react-native"


const styles = StyleSheet.create({
    container: {
        flex:1,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
      },

    text1:{
        fontSize: 24,
        margin: 8,
        marginBottom: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
        
    },

    quadrado1: {
        display: 'flex',
        width: 190,
        height: 230,
        justifyContent: 'space-between',
        marginLeft: 30,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
        borderRadius: 0,
      },
      picture1: {
        width: 190,
        height: 180,
        resizeMode : 'contain',
      },
      descricao1: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
      },

      quadrado2: {
        display: 'flex',
        width: 190,
        height: 230,
        justifyContent: 'space-between',
        marginLeft: 30,
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
        borderRadius: 0,
      },
      picture2: {
        width: 190,
        height: 180,
        resizeMode : 'contain',
      },
      descricao2: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
      },

      quadrado3: {
        display: 'flex',
        width: 190,
        height: 230,
        justifyContent: 'space-between',
        marginLeft: 30, 
        backgroundColor: '#f0f0f0',
        marginBottom: 20,
        borderRadius: 0,
      },
      picture3: {
        width: 190,
        height: 180,
        resizeMode : 'contain',
      },
      descricao3: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
      },


});


export default Singup = () => {




    return(
        <ScrollView  style={styles.scrollView}>
        <View style={styles.container}>

                    <View style={styles.quadrado1}>
                        source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fblogdamimis.com.br%2Frecipe%2Fcuscuz-paulista-de-sardinha%2F&psig=AOvVaw3u20RfG1RgfRrVoFNff9lc&ust=1727188821348000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCND7gPWl2YgDFQAAAAAdAAAAABAJ',}} 
                        <Text style={styles.descricao1}>cuscuz paulista</Text>
                    </View>    

                    <View style={styles.quadrado2}>
                        source ={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.pinterest.com%2Fpin%2F307933693258655659%2F&psig=AOvVaw1G0VJ6z1UHBLPbLXvuGEIG&ust=1727189765116000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICii7ap2YgDFQAAAAAdAAAAABAE',}}
                        <Text style={styles.descricao2}>Barca de Shushi sem shushi</Text>   
                    </View>    

                    <View style={styles.quadrado3}>
                        source ={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.receiteria.com.br%2Freceita%2Farroz-a-grega-tradicional%2F&psig=AOvVaw1G-ou7xH6J-2huozS6bTnn&ust=1727189976899000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi7sqSq2YgDFQAAAAAdAAAAABAE',}}
                        <Text style={styles.descricao3}>Veneno</Text>
                    </View>
            
            </View>
        </ScrollView>

    )
}
