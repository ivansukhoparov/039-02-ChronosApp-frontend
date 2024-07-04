import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
import Button from "./Button";

export default function RegistrationScreen() {
    const [login, onChangeLogin] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeLogin}
                placeholder="Login"
                value={login}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                placeholder="E-mail"
                value={email}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                placeholder="Password"
                value={password}
            />
            <Button label={"Submit"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:"#fff",
        padding: 10,
        color:"#fff"
    }
});