import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [LadoCamera, seTladoCamera] = useState('back')
    const [pressed, setPressed] = useState(false);


    if (!permissao) {
        return <View>

        </View>
    }

    if (!permissao.granted) {

        return (

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
        const fotobase = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
        setFoto(fotobase)
    }

    const salvarfoto = async () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }

    const inverterladoCamera = () => {
        seTladoCamera(LadoCamera == 'back' ? 'front' : 'back')
    }


    return (
        <View style={styles.container}>
            {(foto) ?
                <View style={styles.fototirada}>
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <Pressable style={styles.salvafoto} onPress={() => setFoto(null)}><MaterialIcons name='save-alt' size={54} color='black' /></Pressable>
                     <Pressable style={styles.descartarfoto} onPress={() => setFoto(null)}><Ionicons name="trash" size={54} color="black" /></Pressable>
                </View> :

                <CameraView barcodeScannerSettings={{ barcodeTypes: ["qr"], }}
                    style={styles.camera} facing={LadoCamera} ref={cameraRef}
                    onBarcodeScanned={(code) => Linking.openURL(code.data)}> 
                    <View style={styles.ButtonContainer}>
                        <Pressable
                            style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1 },]}
                            onPressIn={() => setPressed(true)}
                            onPressOut={() => setPressed(false)}

                            title="tirar foto" onPress={tirarFoto} />
                        <Pressable style={styles.giracamera} onPress={inverterladoCamera}><FontAwesome6 name="arrows-rotate" size={46} color="black" /></Pressable>
                    </View>
                </CameraView>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    textopermissao: {
        textAlign: 'center'
    },

    camera: {
        flex: 1
    },
    image: {
        width: '100%',
        height: '100%'
    },
    fototirada: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 35
    },

    ButtonContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center"

    },
    botaotirafoto: {
        width: '100%',
        height: '100%',
        backgroundColor: (255, 255, 255, 0.8),
        alignitems: 'center',
        justifycontent: 'center'
    },
    button: {
        width: 70,
        height: 70,
        borderRadius: 35, 
        backgroundColor: 'white', 
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    giracamera:{
        marginLeft: 250,
        marginBottom: 30,
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    salvafoto:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    descartarfoto:{
        justifyContent: 'center',
        marginBottom: 40
    },
});