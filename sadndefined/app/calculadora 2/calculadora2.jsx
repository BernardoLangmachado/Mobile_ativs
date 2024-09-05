import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


    const App = () => {

    const buttons = ['AC', 'DEL', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '3', '2', '1', '+', '0', '.', '+/-', '=']

    const Calculadora =  function(){
        return(
            <View>
                <View style={styles.result}>
                    <Text style={{fontSize: 20 , margin: 10}}>2+2 =5</Text>
                </View>
                <View style={styles.buttons}></View>
                    {buttons.map((button) =>
                        <TouchableOpacity key={button} style={styles.buttons}><Text style={styles.textButton}>{button}</Text></TouchableOpacity>
                    )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
result:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5'
},
buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap'
},
button:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    minHeight: 80,
    minWidth: 80
},
textButton:{
    color: '#5b5b5b',
    fontSize: 25,
},

});
export default App;
