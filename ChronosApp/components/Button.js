import {
    Pressable, // button
    StyleSheet, // component to create styles
    Text, // block of text
    View // container
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useState} from "react"; // library with vector icons from expo

export default function Button({label, theme, onPress}) {

    let styles = stylesPrimary
    if (theme === "secondary") styles = stylesSecondary

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const stylesSecondary = StyleSheet.create({
    buttonContainer: {
        width: 100,
        height: 50,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#000"
    },

    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    }
})

const stylesPrimary  = StyleSheet.create({
    buttonContainer: {
        width: 100,
        height: 50,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: "#fff"
    },

    buttonLabel: {
        color: '#000',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    }
})