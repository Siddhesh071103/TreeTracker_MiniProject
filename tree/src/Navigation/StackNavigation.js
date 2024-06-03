import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screens/Home'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'
import Upload from '../Screens/Upload'
import Friend from '../Tabs/Friend'
import Map from '../Tabs/Map'
import Plant from '../Tabs/Plantation/Plant'
import Order from '../Tabs/Plantation/Order'
import TermsAndConditionsScreen from '../Tabs/Terms'
import AboutScreen from '../Tabs/AboutUs'
import AboutUs from '../Tabs/Projectm'

const StackNavigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen  name='home' component={Home} />
            <Stack.Screen  name='login' component={Login} />
            <Stack.Screen  name='signup' component={Signup} />
            <Stack.Screen  name='upload' component={Upload}/>
            <Stack.Screen  name='friend' component={Friend}/>
            <Stack.Screen  name='map' component={Map}/>
            <Stack.Screen  name='plant' component={Plant}/>
            <Stack.Screen  name='order' component={Order} />
            <Stack.Screen  name='terms' component={TermsAndConditionsScreen} />
            <Stack.Screen  name='about' component={AboutScreen} />
            <Stack.Screen name='aboutus' component={AboutUs} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})