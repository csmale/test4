import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native-web';
import MyInput from '../components/MyInput.js';
import Password from '../components/Password.js';
import MyButton from '../components/MyButton.js';
import ImageButton from '../components/ImageButton.js';

export default function StartScreen() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/splash.jpg')} />
            <Text style={styles.bigtext}>Welcome to GateMaster</Text>
            <br />
            <Text style={styles.text}>Please log in to the application</Text>
            <MyInput label='User name:' placeholder='username' value='' inputMode='email'></MyInput>
            <Password label='Password:' placeholder='password' value=''></Password>
            <MyButton caption='Sign in' />
            <Text style={styles.text}>Don't have an account yet?&nbsp;&nbsp;
                <Pressable>
                    <Text style={styles.signup}>Sign up</Text>
                </Pressable>
            </Text>
            <br />
            <ImageButton caption='Google' image={require('../images/login_google.png')} />
            <ImageButton caption='Twitter' image={require('../images/login_microsoft.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '200px',
        width: '200px'
    },
    text: {
        fontSize: 14,
        fontWeight: "normal"
    },
    bigtext: {
        fontSize: 20,
        fontWeight: "bold",
    },
    signup: {
        fontSize: 14,
        fontWeight: "bold"
    },
});
