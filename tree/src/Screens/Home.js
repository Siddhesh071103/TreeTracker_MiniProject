import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../assets/white.jpg')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{display: 'flex', justifyContent: 'center',alignItems: 'center',marginTop: 100}}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30}}>
                Let's Get Started
            </Text>
            <View style={{marginTop: 50}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#71b637' }}>TreeTracker</Text>
            </View>
            <View style={{marginTop: 50}}>
                <Image style={{ width: 300, height: 300 }} source={require('../../assets/lowpoly-3d-tree-white-background.jpg')} />
            </View>
            <View style={{marginTop: 25}}>
                <TouchableOpacity onPress={() => navigation.navigate('signup')} style={{ width: 250, height: 50, backgroundColor: '#71b637', borderRadius: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center',marginTop: 7,color: 'black'}}>Sign Up</Text>
                </TouchableOpacity>
            </View>
                <View style={{flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold',color: 'black'}}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <Text style={{ color: '#71b637', fontWeight: 'bold' }}>Log In</Text>
                    </TouchableOpacity>
                </View>
        </View>
            <View style={{ marginTop: 150 }} />
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({})