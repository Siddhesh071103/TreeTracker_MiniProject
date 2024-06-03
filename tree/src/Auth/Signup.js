import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import { BACKEND_URL } from '../constant';

const rimage = require('../../assets/3702074.jpg')

const Signup = () => {
    const navigation = useNavigation();
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    async function handleClick(params) {
        const body={
           'email':email,
           "username":name,
           "password":password
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/auth/signup/`,body)
            console.log(response.data)
            navigation.navigate('login')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ImageBackground source={require('../../assets/white.jpg')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.container}>
                <Image style={{ width: 200, height: 200, marginTop: 50 }} source={rimage} />
                <View>
                    <Text style={{ fontSize: 17, color: 'black' }}>Register to your account</Text>
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
                <Ionicons
                    style={{ marginLeft: 8 }}
                    name="person-sharp"
                    size={25}
                    color="black"
                />
                <TextInput
                    onChangeText={(name) => setName(name)}
                    autoCorrect={false}
                    placeholder="Enter your name"
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
                <TouchableOpacity 
                onPress={handleClick}
                style={{ width: 150, borderRadius: 10, borderColor: 'blue', backgroundColor: '#71b637', marginLeft: 'auto', marginRight: 'auto', padding: 10 }}>
                    <Text style={{ fontSize: 20, textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
                        Register
                    </Text>
                </TouchableOpacity>
                <Pressable
                    style={{ marginTop: 3 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('login')}>
                            <Text style={{ color: '#71b637', fontWeight: 'bold' }}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </View>
            <View style={{ marginTop: 150 }} />
        </ImageBackground>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})