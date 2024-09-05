import { View, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const app_logo = () => {
    const logo = 'https://www.metal-archives.com/images/3/5/4/0/3540330343_logo.png?0442'
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: logo }}/>
            <LinearGradient
             colors={['rgba(0,0,0,0.8)', 'transparent']}
             style={styles.background}></LinearGradient>
        </View> 
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#FFA500',
    },
    logo: {
        width: 500,
        height: 200,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    });
export default app_logo;