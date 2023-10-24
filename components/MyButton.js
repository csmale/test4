import { StyleSheet, View, Button, Pressable } from "react-native-web";

export default function MyButton(props) {
    const { } = props;
    return (
        <View style={styles.container}>
            <Pressable>
                <Button style={styles.button}
                    title={props.caption}
                    color="#e79065"
                    onPress={() => Alert.alert('Button pressed')}
                />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '75%',
        marginTop: 16,
    },
    button: {
        fontSize: 14,
        fontWeight: "light",
    },
});