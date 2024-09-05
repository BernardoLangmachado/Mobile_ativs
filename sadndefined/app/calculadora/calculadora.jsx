import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, Button, TextInputComponent, View } from 'react-native';

const App = () => {
  const [number, onChangeText] = React.useState('')
  const [resultado, setResultado] = React.useState('')

  const soma = function(){
    setResultado(Number(number + 5))
    return number
  }

  const subtracao = function(){
    setResultado(Number(number - 5))
    return number
  }

  const multiplicacao = function(){
    setResultado(Number(number * 5))
    return number
  }

  const divisao = function(){
    setResultado(Number(number / 5))
    return number
  }

  return (
      <View style={styles.container}>
        <Text >Calculadora </Text>

        <TextInput onChangeText={onChangeText} 
          value={number} 
          placeholder='Insira o número aqui'
          keyboardType='numeric'></TextInput>

        <Button
        title='+'
        onPress={() => soma()}
        />

        <Button
        title='-'
        onPress={() => subtracao()}
        />

        <Button
        title='X'
        onPress={() => multiplicacao()}
        />

<Button
        title='/'
        onPress={() => divisao()}
        />

        <Text>O valor é {resultado}</Text>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

  export default App;
