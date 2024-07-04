import {StyleSheet, Text, View} from "react-native";
import Button from "./Button";
import LoginScreen from "./LoginScreen";

export default function StartScreen (){
    return (
        <View style={styles.container}>
            <Text style={styles.header}>ChronosApp</Text>
            <Text style={styles.text}>Welcome to the best application to manage your time</Text>
            <View style={styles.controlContainer}>
                <Button label={"Login"}/>
                <Button label={"Register"}/>
            </View>
            <LoginScreen/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:320,
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlContainer:{
        alignItems: 'center',
        flexDirection: 'row',
    },
    text:{
        color:'#fff',
        fontSize: 15,
        textAlign:"center",
        margin:25,
    },
    header:{
        color:'#fff',
        fontSize: 30,
    }
});