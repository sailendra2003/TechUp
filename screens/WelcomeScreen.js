import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/TechUpLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to TechUp!</Text>
      <Text style={styles.tagline}>Your One-Stop Shop for the Best in Tech</Text>
      <TouchableOpacity 
        style={styles.getStartedButton} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.getStartedButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tagline: {
    fontSize: 20,
    color: '#B0B0B0',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  getStartedButton: {
    backgroundColor: '#00E676',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 30,
  },
  getStartedButtonText: {
    color: '#1C1C1E',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GetStartedScreen;
