import { StyleSheet, View, TextInput, Text } from "react-native-web";
import { useState } from 'react';

export default function MyInput(props) {
    const [text, onChangeText] = useState(props.value);
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'left'}}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <TextInput style={styles.input}
                placeholder={props.placeholder}
                value={text}
                inputMode={props.inputMode}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'left',
        justifyContent: 'left',
        width: '50%',
        marginTop: 16
    },
    input: {
        fontSize: 14,
        fontWeight: "light",
        width: "100%",
        borderBottomWidth : 1.0
    },
    label: {
        fontSize: 16,
        fontWeight: "bold"
    }
});