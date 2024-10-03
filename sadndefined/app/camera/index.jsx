import { useState,useRef } from "react";
import {View, StyleSheet, Text, Image, Button} from "react-native"
import {CameraView, useCameraPermissions} from "expo-camera"

export default function Camera(){
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)


    if(!permissao){
        return <View>
<Text>weafa</Text>
        </View>
    } 
    


    if (!permissao.granted) {

        return(
    
            <View style={styles.container}>
                <Text style={styles.textopermissao}>Voce Precisa de permissao para usar a camera</Text>
                
                <Button
                title='Pedir Permissão' 
                onPress={pedirPermissao}>
                </Button>

            </View>
        )
    } 
    
    const tirarFoto = async () => {
        const foto = cameraRef.current?.TakePictureAsync({
            qual
            
            ty: 0.5,
            base64: true
        })
        setFoto(foto)
        console.log(foto)
    }
    
    
    return(

        
        <View>
            <CameraView style={styles.camera} facing={"back"} ref={cameraRef}>
                <View style={styles.ButtonContainer}>
                    <Button title="tirar foto" onPress={tirarFoto}/>
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