import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { BACKEND_URL } from '../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const limage = require('../../assets/Mobile.jpg')

const Login = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function handleClick(params) {
        const body = {
            'email': email,
            "password": password
        }
        console.log(body);
        try {
            const response = await axios.post(`${BACKEND_URL}/auth/login/`, body)
            await AsyncStorage.setItem('userToken', response.data.token.access)
            console.log(response.data)
            navigation.navigate('upload')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ImageBackground source={require('../../assets/white.jpg')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}
                style={{ padding: 10, paddingTop: 20 }}>
                <AntDesign style={{ marginRight: 350 }} name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.container}>
                <Image style={{ width: 200, height: 200, marginTop: 35 }} source={limage} />
                <View>
                    <Text style={{ fontSize: 17, color: 'black' }}>Login to your account</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    width: 375,
                    backgroundColor: "white",
                    paddingVertical: 5,
                    borderRadius: 10,
                    marginTop: 50,
                    borderWidth: 2,
                    borderColor: '#71b637',
                }}
            >
                <MaterialIcons
                    style={{ marginLeft: 8 }}
                    name="email"
                    size={25}
                    color="black"
                />
                <TextInput
                    onChangeText={(email) => setEmail(email)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Enter your email"
                    placeholderTextColor={"grey"}
                    style={{
                        color: "black",
                        width: 300,
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 5,
                    width: 375,
                    backgroundColor: "white",
                    paddingVertical: 5,
                    borderRadius: 10,
                    marginTop: 10,
                    borderWidth: 2,
                    borderColor: '#71b637',
                }}
            >
                <AntDesign
                    style={{ marginLeft: 8 }}
                    name="lock1"
                    size={25}
                    color="black"
                />
                <TextInput
                    onChangeText={(password) => setPassword(password)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    placeholderTextColor={"grey"}
                    style={{
                        color: "black",
                        width: 300,
                    }}
                />
            </View>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity onPress={() => handleClick()} style={{marginTop: 20,width: 150, borderRadius: 10, borderColor: 'blue', backgroundColor: '#71b637', marginLeft: 'auto', marginRight: 'auto', padding: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={{ marginTop: 3 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                            <Text style={{ color: '#71b637', fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </View>
            <View style={{ marginTop: 150 }} />
        </ImageBackground>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})