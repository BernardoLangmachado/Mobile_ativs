import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button, Pressable } from "react-native"
import { CameraView, useCameraPermissions } from "expo-camera"
import * as MediaLibrary from 'expo-media-library';

export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [LadoCamera, seTladoCamera] = useState('back')
    const salvarfoto = async () => {
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }


    const inverterladoCamera = () => {
        seTladoCamera(LadoCamera == 'back' ? 'front' : 'back')
    }

    if (!permissao) {
        return <View>
            <Text>weafa</Text>
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
        console.log(fotobase)
    }


    return (
        <View style={styles.container}>
            {(foto) ?
                <View style={styles.fototirada}> {/* aqui é a view onde a foto fica tirada */}
                    <Image style={styles.image} source={{ uri: foto.uri }} />
                    <Button title="Descartar" onPress={() => setFoto(null)} />
                    <Button title="Salvar Foto" onPress={salvarfoto}/>
                </View>
                :
                <CameraView   barcodeScannerSettings={{barcodeTypes: ["qr"],}}
                 style={styles.camera} facing={LadoCamera} ref={cameraRef}>{/* tela primaria de tirar a foto e trocar a camera */}
                    <View style={styles.ButtonContainer}>
                        <Pressable  style={styles.botaotirafoto} title="tirar foto" onPress={tirarFoto} />
                        <Button title="trocar lado da camera" onPress={inverterladoCamera} />
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
    botaotirafoto:{
        width: '100%',
        height: '100%',
        backgroundColor: (255, 255, 255, 0.8),
        borderRadius:'50%',
        alignitems: center,
        justifycontent: center
    }
});