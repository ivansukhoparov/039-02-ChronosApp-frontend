import {StyleSheet, Text, View} from "react-native";

export default function EmptyComponent (){
    return (
        <View style={styles.container}>
            <Text style={styles.container}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
});