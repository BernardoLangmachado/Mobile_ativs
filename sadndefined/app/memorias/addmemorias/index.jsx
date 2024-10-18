import React, { useState } from "react"
import { View, Text, StyleSheet, Image, Button, ScrollView, Pressable, TextInput } from "react-native"
import Navmemorias from "../NA/navMemorias"
import AsyncStorage from '@react-native-async-storage/async-storage';


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


const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('memoria', jsonValue);
    console.log('Tá salvo essa bosta');
  } catch (error) {
    console.log(error);
  }
};



export default memorias = () => {

  const [formData, setFormData] = useState({
    titulo: '',
    local: '',
    data: '',
    desc: '',
    imagem: ''
  })


  return (

    <View style={styles.container}>
      <Navmemorias />

      <View style={styles.quadrado}>

        <View style={styles.quadrado2}>

          <TextInput
            placeholder='Título'
            value={formData.titulo}
            onChangeText={sample => setFormData({ ...formData, titulo: sample })}
            style={styles.input}
            require
          />
          <TextInput
            placeholder='Local'
            value={formData.local}
            onChangeText={sample => setFormData({ ...formData, local: sample })}
            style={styles.input}
            require
          />
          <TextInput
            placeholder='Data'
            value={formData.data}
            onChangeText={sample => setFormData({ ...formData, data: sample })}
            style={styles.input}
            require
          />
          <TextInput
            placeholder='Descrição'
            value={formData.desc}
            onChangeText={sample => setFormData({ ...formData, desc: sample })}
            style={styles.input}
            require
          />

          <Pressable style={styles.botaoaddmemory} onPress={console.log(formData)}>
            <Text>MOstrar</Text>
          </Pressable>
        </View>

      </View>
    </View>



  );
};

