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
      sinops1: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: -69,
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
      sinops2: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: -69,   
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
      sinops3: {
        fontSize: 12,
        textAlign: 'center',
        marginTop: -69,   
      },

})


export default Singup = () => {

    return(
        <ScrollView  style={styles.scrollView}>
            <View style={styles.container}>
                
                <Text style={styles.text1}> Meus animes favoritos</Text>

                    <View style={styles.quadrado1}>
                        <Image style={styles.picture1}  source={require('../../../assets/images/fullmetal.jpg')}/>
                        <Text style={styles.descricao1}>Full Metal Alchemist</Text>
                        {/* <Text style={styles.sinops1}>Os irmãos Edward e Al Elric praticam o tabu da transmutação humana e pagam caro por isso. Edward perde um braço e uma perna e Al perde o corpo todo. Os dois crescem e decidem sair pelo mundo em busca de uma maneira de consertar o que fizeram.</Text> */}
                    </View>    

                    <View style={styles.quadrado2}>
                        <Image style={styles.picture2}  source={require('../../../assets/images/death note.jpg')}/>
                        <Text style={styles.descricao2}>Death Note</Text>
                        {/* <Text style={styles.sinops2}>A história centra-se em Light Yagami, um estudante do ensino médio que descobre um caderno sobrenatural chamado Death Note, no qual pode matar pessoas se os nomes forem escritos nele enquanto o portador visualizar mentalmente o rosto de alguém que quer assassinar.</Text> */}
                    </View>    

                    <View style={styles.quadrado3}>
                        <Image style={styles.picture3}  source={require('../../../assets/images/soul eater.jpg')}/>
                        <Text style={styles.descricao3}>Soul Eater</Text>
                        {/* <Text style={styles.sinops3}>O manga conta a história de uma escola fictícia chamada Shibusen, localizada no estado americano de Nevada, criada para eliminar os Ovos de Kishins, seres que usam a alma de humanos para se tornarem mais poderosos, e as bruxas que vivem aterrorizando o mundo.</Text> */}
                    </View>
            
            </View>
        </ScrollView>
    );
    
}
