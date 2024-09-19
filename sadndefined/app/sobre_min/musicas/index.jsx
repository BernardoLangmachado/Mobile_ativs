import React, {useState} from "react"
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"


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
        height: 260,
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
        height: 0,
        marginBottom: 80
      },
      sinops1: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: -67,
      },

      quadrado2: {
        display: 'flex',
        width: 190,
        height: 260,
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
        height: 0,
        marginBottom: 80
      },
      sinops2: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: -67,
      },

      quadrado3: {
        display: 'flex',
        width: 190,
        height: 260,
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
        height: 0,
        marginBottom: 80
      },
      sinops3: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: -67,
      },

})


export default Singup = () => {

    return(
        <ScrollView  style={styles.scrollView}>
            <View style={styles.container}>
                
                <Text style={styles.text1}> Minhas Musicas favoritas</Text>

                    <View style={styles.quadrado1}>
                        <Image style={styles.picture1}  source={require('../../../assets/images/project46logo.jpg')}/>
                        <Text style={styles.descricao1}>Pode Pá</Text>
                        <Text style={styles.sinops1}>Project46</Text>
                    </View>    

                    <View style={styles.quadrado2}>
                        <Image style={styles.picture2}  source={require('../../../assets/images/Top_Lane_Boy.jpg')}/>
                        <Text style={styles.descricao2}>Lane Boy</Text>
                        <Text style={styles.sinops2}>Twenty One Pilots</Text>
                    </View>    

                    <View style={styles.quadrado3}>
                        <Image style={styles.picture3}  source={require('../../../assets/images/Metallica_One_.jpg')}/>
                        <Text style={styles.descricao3}>One</Text>
                        <Text style={styles.sinops3}>Metallica</Text>
                    </View>
            
            </View>
        </ScrollView>
    );
    
}
