import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/welcome-screen.png')} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>Discover Your Dream Job Here</Text>
      <Text style={styles.subtitle}>
        Explore all the existing job roles based on your interest and study major
      </Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.registerButton} 
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF', // Changed to match login button color
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'rgba(0, 123, 255, 0.2)', // Transparent button
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  buttonText: {
    color: '#fff', // Change button text color to white for better contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#007BFF', // Text color for the Register button
    fontSize: 18,
    fontWeight: 'bold', // Bold text for Register
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
