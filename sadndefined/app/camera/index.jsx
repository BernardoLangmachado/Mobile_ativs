import { useState,useRef } from "react";
import {View, StyleSheet, Text, Image, Button} from "react-native"
import {CameraView, useCameraPermissions} from "expo-camera"

export default function Camera(){
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)


    if(!permissao){
        return <View>

        </View>
    } 
    


    if (!permissao.granted) {

        const tirarFoto = async () => {
            const doto = cameraRef.current?.TakePictureAsync({
                quality: 0.5,
                base64: true
            })
            setFoto(doto)
            console.log(doto)
        }

        return(
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Voce Precisa de permissao para usar a camera</Text>
                
                <Button
                title='Pedir Permissão' 
                onPress={pedirPermissao}>
                </Button>

            </View>
        )
    } return(

        
        <View>
            <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
                <View style={styles.ButtonContainer}>
                    <Button title="tirar foto" onPress={tiraRFoto}/>
                </View>

            </CameraView>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    
    textopermissao:{
        textAlign:'center'
    },
    
    camera:{
        flex:1
    }

});