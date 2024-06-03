import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; 
import { useNavigation } from '@react-navigation/native';

const Screen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Terms and Conditions */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('terms')}>
        <Feather name="book" size={24} color="white" style={styles.icon} />
        <Text style={styles.text}>Terms and Conditions</Text>
      </TouchableOpacity>

      {/* About Project */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('about')}>
        <Feather name="info" size={24} color="white" style={styles.icon} />
        <Text style={styles.text}>About Project</Text>
      </TouchableOpacity>

      {/* About Us */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('aboutus')}>
        <Feather name="info" size={24} color="white" style={styles.icon}/>
        <Text style={styles.text}>About Us</Text>
      </TouchableOpacity>

      {/* Logout */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Feather name="log-out" size={24} color="white" style={styles.icon} />
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center content horizontally
    marginVertical: 10,
    backgroundColor: '#71b637',
    padding: 10,
    borderRadius: 5,
    width: '80%', // Set the width to 80% of the container
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default Screen;
